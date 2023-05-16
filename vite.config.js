import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "~@": resolve(__dirname, "src"),
            "@atom": resolve(__dirname, "src/components/atom"),
            "@molecule": resolve(__dirname, "src/components/molecule"),
            "@organism": resolve(__dirname, "src/components/organism"),
        },
    },
});
