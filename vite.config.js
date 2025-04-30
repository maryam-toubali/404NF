import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
