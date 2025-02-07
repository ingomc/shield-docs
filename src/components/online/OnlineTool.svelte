
<script>
      let version = '1.4';

      let envs = [
        'www.huk.de',
        'hukde-de.web.dmz.tuhuk.de',
        'hukde-d2.web.dmz.tuhuk.de',
        'hukde-d3.web.dmz.tuhuk.de',
        'static.c.hukde-de.web.dmz.tuhuk.de',
        'dlvdfdniz596t.cloudfront.net/hukde',
        'www.huk24.de',
        'huk24-de.web.dmz.tuhuk.de',
        'huk24-d2.web.dmz.tuhuk.de',
        'huk24-d3.web.dmz.tuhuk.de',
        'static.c.huk24-de.web.dmz.tuhuk.de',
        'dlvdfdniz596t.cloudfront.net/huk24',
        'www.vrk.de',
        'vrk-de.web.dmz.tuhuk.de',
        'vrk-d2.web.dmz.tuhuk.de',
        'vrk-d3.web.dmz.tuhuk.de',
        'static.c.vrk-de.web.dmz.tuhuk.de',
        'dlvdfdniz596t.cloudfront.net/vrk'
      ];
      $: files = [
        {
          url: `https://${environment}/shield/css-framework/${version}/css/all.css`,
          type: 'css'
        },
        {
          url: `https://${environment}/shield/components/${version}/lib/lib.esm.js`,
          type: 'js'
        },
        {
          url: `https://${environment}/shield/themes/${version}/hukde/theme.css`,
          type: 'css'
        }
      ];
	// let mandants = ['huk','huk24','vrk'];
	$: environment = 'www.huk.de';
	// https://dlvdfdniz596t.cloudfront.net/hukde/shield/components/1.3/lib/lib.esm.js
</script>

<div class="grid grid-cols-2 gap-4">
	<div>
		<label for="version">Versionsnummer:</label>
		<input id="version" type="text" bind:value={version} />
		<div><small>Ausgewählt: <strong>{version}</strong></small></div>
	</div>
	<div>
		<label for="env">Umgebung:</label><br />
		<select name="env" id="env" bind:value={environment}>
			{#each envs as env, i}
				{#if i % 6 === 0 && i > 0}
					<option disabled>──────────</option>
				{/if}
				<option value={env}>{env}</option>
			{/each}
		</select>
		<div><small>Ausgewählt: <strong>{environment}</strong></small></div>
	</div>
</div>

<div class="landing-card">
    <ul>
		{#each files as file, i}
			<li>
				<a class="link" href={file.url} target="_blank"
					>{file.url}<svg
						class="inline-block"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 256 256"
						><path
							fill="currentColor"
							d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z"
						/></svg
					></a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
  .link {
    display: inline-flex;
    place-content: center;
    gap: .3rem;
  }
</style>