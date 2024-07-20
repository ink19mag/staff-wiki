import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ink 19 Staff Wiki',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Useful Links',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Contact', slug: 'contact' },
						{ label: 'Help', slug: 'wiki-help' },
					],
				},
				{
					label: 'Staff Site',
					autogenerate: { directory: 'kexy' },
				},
				{
					label: 'Editorial',
					autogenerate: { directory: 'editorial' },
				},
				{
					label: 'Room 19',
					autogenerate: { directory: 'room19' },
				},
			],
		}),
	],
});
