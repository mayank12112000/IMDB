import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Set this to 'true' or use '0.0.0.0' to listen on all IPs, including your local network
    port: 5173,  // Optional: Change this to any port you prefer
    // strictPort: true, // Optional: If true, Vite will fail if the port is already in use
  },
})
