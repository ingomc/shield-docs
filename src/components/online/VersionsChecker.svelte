<script>
	export let data;
	const environments = ['prod', 'cloudprod', 'test', 'cloudts'];
	let environment = environments[0];

	let selectedVersions = {};
	const getShortVersion = (fullversion) => {
		const [major, minor] = fullversion.split('.');
		return `${major}.${minor}`;
	};
	Object.keys(data).forEach((name) => {
		selectedVersions[name] = data[name][0];
	});

	export const mandants = {
		huk: {
			componentname: '@shield/hukde-components',
			urls: {
				prod: ['www.huk.de'],
				test: [
					'hukde-de.web.dmz.tuhuk.de',
					'hukde-d2.web.dmz.tuhuk.de',
					'hukde-d3.web.dmz.tuhuk.de'
				],
				cloudprod: ['static.c.huk.de'],
				cloudts: [
					'static.c.hukde-de.web.dmz.tuhuk.de',
					'dlvdfdniz596t.cloudfront.net/hukde'
				]
			}
		},
		huk24: {
			componentname: '@shield/huk24-components',
			urls: {
				prod: ['www.huk24.de'],
				test: [
					'huk24-de.web.dmz.tuhuk.de',
					'huk24-d2.web.dmz.tuhuk.de',
					'huk24-d3.web.dmz.tuhuk.de'
				],
				cloudprod: ['static.c.huk24.de'],
				cloudts: [
					'static.c.huk24-de.web.dmz.tuhuk.de',
					'dlvdfdniz596t.cloudfront.net/huk24'
				]
			}
		},
		vrk: {
			componentname: '@shield/vrk-components',
			urls: {
				prod: ['www.vrk.de'],
				test: [
					'vrk-de.web.dmz.tuhuk.de',
					'vrk-d2.web.dmz.tuhuk.de',
					'vrk-d3.web.dmz.tuhuk.de'
				],
				cloudprod: ['static.c.vrk.de'],
				cloudts: [
					'static.c.vrk-de.web.dmz.tuhuk.de',
					'dlvdfdniz596t.cloudfront.net/vrk'
				]
			}
		}
	};

	$: files = [
		{
			url: (host, mandant) =>
				`https://${host}/shield/components/${getShortVersion(
					selectedVersions[mandants[mandant].componentname]
				)}/lib/lib.esm.js`,
			type: 'components'
		},
		{
			url: (host) =>
				`https://${host}/shield/css-framework/${getShortVersion(
					selectedVersions['@shield/css-framework']
				)}/css/all.css`,
			type: 'css-framework'
		},
		{
			url: (host) =>
				`https://${host}/shield/themes/${getShortVersion(
					selectedVersions['@shield/themes']
				)}/hukde/theme.css`,
			type: 'themes'
		}
	];

	// Zusatz: Dynamisch geladene Versionen speichern
	let loadedVersions = {};

	// Zusatz: Funktion zum Extrahieren der Version aus dem Text
	async function fetchVersion(url) {
		try {
			const response = await fetch(url, { cache: 'no-store' });
			const text = await response.text();

			// Einfache Regex nach Version, z.B. "v1.8.3"
			const match = text.match(/v\d+\.\d+\.\d+/i);
			return match ? match[0] : 'Keine Version gefunden';
		} catch (err) {
			return 'CORS?';
		}
	}

	// Zusatz: Automatischer Version-Fetch für alle URLs
	$: {
		Object.entries(mandants).forEach(([mandantName, mandant]) => {
			mandant.urls[environment].forEach((envHost) => {
				files.forEach((file) => {
					const url = file.url(envHost, mandantName);
					if (!loadedVersions[url]) {
						fetchVersion(url).then((version) => {
							loadedVersions = { ...loadedVersions, [url]: version };
						});
					}
				});
			});
		});
	}
</script>

<h6>Versionen</h6>
<div class="s:d-grid s:gap-2" style="--g-cols: 3">
	{#each Object.entries(data) as [name, value]}
		<span>
			<select
				width="100%"
				class="font-mono"
				name="versions-{name}"
				id="versions-{name}"
				bind:value={selectedVersions[name]}>
				{#each value as version}
					<option value={version}>{version} - {name.split('/')[1]}</option>
				{/each}
			</select>
		</span>
	{/each}
</div>

<div class="s:d-flex s:items-center">
	<h6>Mandanten</h6>
	<span class="s:d-flex s:ml-a s:items-center">
		<h6>Umgebung:</h6>
		<span>
			<select class="s:w-32 ml-auto" name="env" id="env" bind:value={environment}>
				{#each environments as option}
					<option value={option}>{option.toLocaleUpperCase()}</option>
				{/each}
			</select>
		</span>
	</span>
</div>

{#each Object.entries(mandants) as [name, values]}
	<h6>{name.toUpperCase()}</h6>
	{#each mandants[name].urls[environment] as envHost}
		<div class="card not-content">
			<ul>
				{#each files as file}
					<li class="s:pr-10">
						<s-badge color={loadedVersions[file.url(envHost, name)] == 'CORS?' ? 'critical' : 'positive'} content={loadedVersions[file.url(envHost, name)] ?? 'vX.X.X'}>
							<a href={file.url(envHost, name).replace('https://', '//')} target="_blank">
								{file.url(envHost, name)}
								<svg
									class="inline-block"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 256 256">
									<path
										fill="currentColor"
										d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72h58V80h72a8 8 0 0 0 0-16h58a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z"/>
								</svg>
							</a>
						</s-badge>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
{/each}

<style>
	select {
		width: 100%;
		padding: .5rem;
	}
	ul {
		padding-inline-start: 1rem;
		hyphens: auto;
		word-break: break-all;
	}
	.card {
		border: 1px solid var(--sl-color-gray-5);
		border-radius: 0.5rem;
		padding: 1rem;
		text-decoration: none;
		color: var(--sl-color-gray-2);
		box-shadow: var(--sl-shadow-md);
	}
</style>
