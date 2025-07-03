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
		},
		{
			url: (host) =>
				`https://${host}/shield/style-dictionary/${getShortVersion(
					selectedVersions['@shield/style-dictionary']
				)}/figma/tokens.json`,
			type: 'themes'
		}
	];

	// Zusatz: Dynamisch geladene Versionen speichern
	let loadedVersions = {};

	// Zusatz: Funktion zum Extrahieren der Version aus dem Text
	async function fetchVersion(url) {
		try {
			// Check if this is a prod URL that needs CORS proxy
			const needsProxy = url.includes('www.huk.de') || 
			                  url.includes('www.huk24.de') || 
			                  url.includes('www.vrk.de') ||
			                  url.includes('static.c.huk.de') || 
			                  url.includes('static.c.huk24.de') ||
			                  url.includes('static.c.vrk.de');
			
			if (needsProxy) {
				// Use the Astro API proxy for prod URLs that have CORS restrictions
				const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
				const response = await fetch(proxyUrl, { cache: 'no-store' });
				const data = await response.json();
				
				if (data.status === 'success') {
					return data.version;
				} else {
					return data.version || 'Fehler beim Laden';
				}
			} else {
				// Direct fetch for non-prod URLs (no CORS issues)
				const response = await fetch(url, { cache: 'no-store' });
				const text = await response.text();
				
				// Try multiple version patterns
				let version = 'Keine Version gefunden';
				
				// Pattern 1: v1.2.3 format
				const versionRegex1 = /v\d+\.\d+\.\d+/i;
				let versionMatch = versionRegex1.exec(text);
				if (versionMatch) {
					version = versionMatch[0];
				} else {
					// Pattern 2: "version":"1.2.3" format (for JSON)
					const versionRegex2 = /"version"\s*:\s*"(\d+\.\d+\.\d+)"/i;
					versionMatch = versionRegex2.exec(text);
					if (versionMatch) {
						version = `v${versionMatch[1]}`;
					} else {
						// Pattern 3: $metadata.version format (for figma tokens.json)
						const versionRegex3 = /"\$metadata"\s*:\s*{[^}]*"version"\s*:\s*"([^"]+)"/i;
						versionMatch = versionRegex3.exec(text);
						if (versionMatch) {
							version = versionMatch[1].startsWith('v') ? versionMatch[1] : `v${versionMatch[1]}`;
						} else {
							// Pattern 4: simple 1.2.3 format
							const versionRegex4 = /\b\d+\.\d+\.\d+\b/;
							versionMatch = versionRegex4.exec(text);
							if (versionMatch) {
								version = `v${versionMatch[0]}`;
							}
						}
					}
				}
				
				return version;
			}
		} catch (err) {
			return 'Fehler beim Laden';
		}
	}

	// Funktion für Badge-Klasse
	function getBadgeClass(version) {
		if (!version || version === 'vX.X.X') {
			return 'loading';
		}
		if (version.includes('Fehler') || version.includes('Error') || version.includes('Timeout')) {
			return 'error';
		}
		if (version === 'Keine Version gefunden') {
			return 'warning'; // Neue Klasse für "keine Version gefunden"
		}
		return 'success';
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
					<li class="s:pr-10 link-item">
						<a href={file.url(envHost, name).replace('https://', '//')} target="_blank" class="link">
							{file.url(envHost, name)}
							<svg
								class="inline-block external-link-icon"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 256 256">
								<path
									fill="currentColor"
									d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72h58V80h72a8 8 0 0 0 0-16h58a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z"/>
							</svg>
						</a>
						<span class="version-badge {getBadgeClass(loadedVersions[file.url(envHost, name)])}">
							{loadedVersions[file.url(envHost, name)] ?? 'vX.X.X'}
						</span>
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
	.link-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.link {
		color: var(--sl-color-text-accent);
		text-decoration: underline;
		flex: 1;
	}
	.link:hover {
		text-decoration: none;
	}
	.external-link-icon {
		margin-left: 0.25rem;
		opacity: 0.7;
	}
	.version-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.25rem 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.75rem;
		font-weight: 500;
		white-space: nowrap;
		min-width: 80px;
		justify-content: center;
	}
	.version-badge.success {
		background-color: #dcfce7;
		color: #166534;
		border: 1px solid #bbf7d0;
	}
	.version-badge.error {
		background-color: #fef2f2;
		color: #991b1b;
		border: 1px solid #fecaca;
	}
	.version-badge.loading {
		background-color: #f3f4f6;
		color: #6b7280;
		border: 1px solid #d1d5db;
	}
	.version-badge.warning {
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fde68a;
	}
	/* Dark mode support */
	:global([data-theme="dark"]) .version-badge.success {
		background-color: #14532d;
		color: #bbf7d0;
		border: 1px solid #166534;
	}
	:global([data-theme="dark"]) .version-badge.error {
		background-color: #7f1d1d;
		color: #fecaca;
		border: 1px solid #991b1b;
	}
	:global([data-theme="dark"]) .version-badge.loading {
		background-color: #374151;
		color: #9ca3af;
		border: 1px solid #4b5563;
	}
	:global([data-theme="dark"]) .version-badge.warning {
		background-color: #78350f;
		color: #fde68a;
		border: 1px solid #92400e;
	}
</style>
