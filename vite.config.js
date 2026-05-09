import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
          // programData: ['./src/Data/ProgramData.jsx'],
          // ajoute ici d’autres gros fichiers si besoin
        },
      },
    },
    chunkSizeWarningLimit: 1000, // optionnel : pour ne plus afficher le warning à 500kB
  },
})
