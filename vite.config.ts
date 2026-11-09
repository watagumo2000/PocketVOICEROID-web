import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages のプロジェクトサイト（https://<ユーザー名>.github.io/PocketVOICEROID-web/）で公開する
export default defineConfig({
  base: '/PocketVOICEROID-web/',
  plugins: [tailwindcss(), svelte()],
})
