import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import liveCode from 'astro-live-code';
import { version } from './package.json';
import { sidebar } from './sidebar';
import svelte from '@astrojs/svelte';

const cloudPath = 'https://static.c.huk.de/shield/';

// https://astro.build/config
export default defineConfig({
  site: 'https://withastrostarlightylbot4-w3df--4321--41692973.local-credentialless.webcontainer.io',
  integrations: [
    starlight({
      title: `Shield v${version} `,
      defaultLocale: 'de',
      locales: {
        de: {
          label: 'Deutsch',
        },
      },
      customCss: ['./src/styles/starlight-hukde.css'],
      social: {
        github: 'https://github.com/HUK-COBURG/shield-design-tokens',
      },
      sidebar: [...sidebar],
      head: [
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: `${cloudPath}components/1.6/lib/lib.esm.js`,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: `${cloudPath}themes/1.6/hukde/tokens.css`,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: `${cloudPath}css-framework/1.6/css/all.css`,
          },
        },
      ],
    }),
    liveCode(),
    svelte(),
  ],
});
