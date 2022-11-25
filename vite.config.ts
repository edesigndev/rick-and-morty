import { defineConfig } from "vite"
import { fileURLToPath, URL } from "url"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  base: "/rick-and-morty/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/abstracts/_variables.scss";`,
      },
    },
  },
})
