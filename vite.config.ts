import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory
    sourcemap: true,
    assetsDir:'AyaanMotionAcademy/assets'
  },
  base: "/AyaanMotionAcademy/",
});
