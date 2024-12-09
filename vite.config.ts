import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	esbuild: {
		drop: ['console', 'debugger'],
		legalComments: 'none',
		minifyIdentifiers: true,
		minifySyntax: true,
		minifyWhitespace: true,
	},
})
