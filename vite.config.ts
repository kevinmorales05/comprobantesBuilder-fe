import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Cambia esto si es necesario
  },
  build: {
    outDir: 'dist', // Este es el directorio que se desplegará
  },
});
