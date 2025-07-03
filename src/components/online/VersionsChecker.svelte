<script>
	export let data;
	const environments = ['prod', 'cloudprod', 'test', 'cloudts'];
	
	// Session Storage für Umgebungsauswahl
	let environment = environments[0];
	let mounted = false;
	
	// Beim Laden der Komponente: Gespeicherte Werte aus Session Storage laden
	import { onMount } from 'svelte';
	
	let selectedVersions = {};
	const getShortVersion = (fullversion) => {
		const [major, minor] = fullversion.split('.');
		return `${major}.${minor}`;
	};
	
	// Initialisierung der selectedVersions mit Defaults
	Object.keys(data).forEach((name) => {
		selectedVersions[name] = data[name][0];
	});
	
	onMount(() => {
		// Gespeicherte Umgebung laden
		const savedEnvironment = sessionStorage.getItem('shield-environment');
		if (savedEnvironment && environments.includes(savedEnvironment)) {
			environment = savedEnvironment;
		}
		
		// Gespeicherte Versionen laden
		const savedVersions = sessionStorage.getItem('shield-versions');
		if (savedVersions) {
			try {
				const parsedVersions = JSON.parse(savedVersions);
				// Nur gültige Versionen übernehmen
				Object.keys(parsedVersions).forEach(name => {
					if (data[name] && data[name].includes(parsedVersions[name])) {
						selectedVersions[name] = parsedVersions[name];
					}
				});
				// Trigger reactivity
				selectedVersions = { ...selectedVersions };
			} catch (e) {
				// Fallback bei Parse-Fehlern
				console.warn('Could not parse saved versions from sessionStorage');
			}
		}
		
		// Jetzt können wir die Werte speichern
		mounted = true;
	});
	
	// Reactive Statements: Werte in Session Storage speichern wenn sie sich ändern
	$: if (mounted && environment) {
		sessionStorage.setItem('shield-environment', environment);
	}
	
	$: if (mounted && selectedVersions) {
		sessionStorage.setItem('shield-versions', JSON.stringify(selectedVersions));
	}
	
	// Reset-Funktion für alles (Versionen + Umgebung)
	function resetAll() {
		// Umgebung zurücksetzen
		environment = environments[0];
		
		// Versionen zurücksetzen
		Object.keys(data).forEach((name) => {
			selectedVersions[name] = data[name][0];
		});
		selectedVersions = { ...selectedVersions };
		
		// Session Storage löschen
		if (mounted) {
			sessionStorage.removeItem('shield-versions');
			sessionStorage.removeItem('shield-environment');
		}
		
		// Auch loadedVersions zurücksetzen, damit neue Versionen geladen werden
		loadedVersions = {};
	}

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
<div class="versions-section">
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
	<button 
		class="reset-button" 
		on:click={resetAll}
		title="Alles zurücksetzen (Versionen + Umgebung)">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
			<path d="M3 3v5h5"/>
		</svg>
	</button>
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
	<div class="mandant-section">
		<h6>{name.toUpperCase()}</h6>
		<div class="hosts-container">
			{#each mandants[name].urls[environment] as envHost}
				<div class="host-card {name}-border">
					<div class="host-title">{envHost}</div>
					<div class="files-grid">
						{#each files as file}
							<div class="file-row">
								<div class="file-info">
									<a href={file.url(envHost, name).replace('https://', '//')} target="_blank" class="file-link">
										<span class="url-base">/shield/</span>
										<span class="url-type-badge">{file.type}</span>
										<span class="url-base">/</span>
										<span class="url-version-badge">{getShortVersion(selectedVersions[file.type === 'components' ? mandants[name].componentname : '@shield/' + file.type])}</span>
										<span class="url-base">/{file.type === 'components' ? 'lib/lib.esm.js' : file.type === 'css-framework' ? 'css/all.css' : file.type === 'themes' ? 'hukde/theme.css' : 'figma/tokens.json'}</span>
										<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
											<polyline points="15,3 21,3 21,9"></polyline>
											<line x1="10" y1="14" x2="21" y2="3"></line>
										</svg>
									</a>
								</div>
								<span class="version-badge {getBadgeClass(loadedVersions[file.url(envHost, name)])}">
									{loadedVersions[file.url(envHost, name)] ?? 'vX.X.X'}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style>
	select {
		width: 100%;
		padding: .5rem;
	}

	.versions-section {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.versions-section > div {
		flex: 1;
	}

	.reset-button {
		background: var(--sl-color-bg-nav);
		border: 1px solid var(--sl-color-gray-5);
		border-radius: 0.375rem;
		padding: 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sl-color-text);
		transition: all 0.2s ease;
		min-width: 40px;
		height: 40px;
	}

	.reset-button:hover {
		background: var(--sl-color-bg-sidebar);
		border-color: var(--sl-color-gray-4);
		transform: translateY(-1px);
	}

	.reset-button:active {
		transform: translateY(0);
	}

	.mandant-section {
		margin-bottom: 1.5rem;
	}

	.mandant-section h6 {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		font-weight: 600;
	}

	.hosts-container {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: 1fr;
	}

	.host-card {
		background: var(--sl-color-bg-nav);
		border: 1px solid var(--sl-color-gray-5);
		border-radius: 0.5rem;
		padding: 0.75rem;
		box-shadow: var(--sl-shadow-sm);
	}

	.host-title {
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: var(--sl-color-text);
		font-size: 0.8rem;
		padding-bottom: 0.375rem;
		border-bottom: 1px solid var(--sl-color-gray-5);
	}

	.files-grid {
		display: grid;
		gap: 0.125rem;
	}

	.file-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.25rem 0.5rem;
		background: var(--sl-color-bg);
		border: 1px solid var(--sl-color-gray-6);
		border-radius: 0.375rem;
		min-height: 1.5rem;
	}

	.file-info {
		flex: 1;
		min-width: 0;
	}

	.file-link {
		font-size: 0.875rem;
		color: var(--sl-color-text-accent) !important;
		text-decoration: underline !important;
		display: flex;
		align-items: center;
		gap: 0.125rem;
		flex-wrap: wrap;
	}

	.url-base {
		color: var(--sl-color-gray-3);
		font-size: 0.8rem;
	}

	.url-type-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.0625rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.625rem;
		font-weight: 600;
		text-transform: lowercase;
		background: var(--sl-color-accent);
		color: var(--sl-color-white);
		margin: 0 0.125rem;
	}

	.url-version-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.0625rem 0.375rem;
		border-radius: 0.25rem;
		font-size: 0.625rem;
		font-weight: 600;
		background: var(--sl-color-purple);
		color: var(--sl-color-white);
		margin: 0 0.125rem;
	}

	.file-link:hover {
		color: var(--sl-color-text-accent) !important;
		text-decoration: underline !important;
	}

	.file-link:visited {
		color: var(--sl-color-text-accent) !important;
		text-decoration: underline !important;
	}

	.file-link:active {
		color: var(--sl-color-text-accent) !important;
		text-decoration: underline !important;
	}

	.external-icon {
		flex-shrink: 0;
		opacity: 0.7;
	}

	/* Mandant-spezifische Borderfarben */
	.huk-border {
		border-color: #ffd700 !important; /* Gold */
	}

	.huk24-border {
		border-color: #ff8c00 !important; /* Orange */
	}

	.vrk-border {
		border-color: #4a90e2 !important; /* Blau */
	}

	.version-badge {
		display: inline-flex;
		align-items: center;
		padding: 0.125rem 0.5rem;
		border-radius: 9999px;
		font-size: 0.675rem;
		font-weight: 500;
		white-space: nowrap;
		min-width: 50px;
		justify-content: center;
		flex-shrink: 0;
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
