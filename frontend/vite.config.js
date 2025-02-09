import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006,
    proxy: {
      "/user": {
        target: "http://localhost:3006",
        changeOrigin: true,
      },
    },
  },
});
