import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import { VitePWA } from 'vite-plugin-pwa'

import path from 'path'


const VitePWAConfig = {
  mode: "development",
  base: "./",
  srcDir: "src",
  filename: "sw.ts",
  includeAssets: ["/favicon.png"],
  strategies: "injectManifest",
  manifest: {
    name: "PWA Test Project",
    id: "Gaston Campana's PWA Test Project",
    short_name: "Test",
    theme_color: "#6200ee",
    start_url: "./#/home/welcome",
    scope: "./",
    display: "standalone",
    background_color: "#6200ee",
    icons: [
      {
        src: "./img/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./img/icons/android-chrome-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "./img/icons/android-chrome-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    VitePWA(VitePWAConfig),
    
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@':            path.resolve(__dirname, './node_modules/'),
      'Components':   path.resolve(__dirname, './src/components'),
      'Views':        path.resolve(__dirname, './src/views'),
      'Helpers':      path.resolve(__dirname, './src/helpers'),
      'Router':       path.resolve(__dirname, './src/router'),
    },
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
