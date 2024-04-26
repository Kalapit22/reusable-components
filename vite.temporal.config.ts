
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import federation from '@originjs/vite-plugin-federation';
import { URL, fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_PUBLIC_URL;

  return {
    plugins: [
      react(),
      federation({
        name: "pokemonList",
        filename: "remoteEntry.js",
        exposes: {
          "./PokemonList": "./src/components/PokemonList",
          "./Pokemon": "./src/atoms/Pokemon.ts",
        },
        shared: ["react", "react-dom", "jotai"],
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base,
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    }
  }
});
