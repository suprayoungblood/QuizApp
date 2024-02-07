import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration for Vite
export default defineConfig({
  // Plugins used by Vite, here it includes support for React
  plugins: [react()],
  // Server configuration
  server: {
    // Listen on all network interfaces
    // This makes the development server accessible from outside the Docker container
    host: "0.0.0.0",
  },
});
