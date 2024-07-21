import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ink 19 Staff Wiki',
			social: {
				facebook: 'https://www.facebook.com/ink19',
				instagram: 'https://www.instagram.com/ink19mag/',
				email: 'mailto:editors@ink19.com',
				// mastodon: 'https://room19.com/@ink19',
			},
			sidebar: [
				{
					label: 'Useful Links',
					items: [
						{ label: 'Contact', slug: 'contact' }
					],
				},
				// {
				// 	label: 'Staff Site',
				// 	autogenerate: { directory: 'kexy' },
				// },
				{
					label: 'Editorial',
					autogenerate: { directory: 'editorial' },
				},
				// {
				// 	label: 'Room 19',
				// 	autogenerate: { directory: 'room19' },
				// },
			],
		}),
	],
});
