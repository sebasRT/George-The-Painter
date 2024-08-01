/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'emerald': {
			'50': '#f2fbf5',
			'100': '#e0f8e7',
			'200': '#c2f0d1',
			'300': '#93e2ae',
			'400': '#50c878',
			'500': '#36b15f',
			'600': '#27924c',
			'700': '#22733d',
			'800': '#205b34',
			'900': '#1c4b2e',
			'950': '#0a2916',
		},
		'white': '#F9F9F9'
	},
	fontFamily: {
		'antonio' : 'Antonio, sans-serif',
		'inter': 'Inter, sans-serif',
		'bebas': ['"Bebas Neue"', 'sans-serif']
	}
		},
	},
	plugins: []
}
