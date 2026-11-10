// .svelte ファイルの import（`import App from './App.svelte'`）と、
// Vite が扱う画像などの import（`import akane from './images/akane.webp'`）の型を読み込む。
// tsconfig.app.json の "types" でも読み込んでいるが、エディタ（VS Code）の TypeScript が
// それを読み落としたときでも型が見つかるように、ここで直接指定しておく。
/// <reference types="svelte" />
/// <reference types="vite/client" />
