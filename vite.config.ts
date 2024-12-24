import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
    if (mode === 'widget-a') {
      return {
        plugins: [react()],
        build: {
          lib: {
            entry: path.resolve(__dirname, 'src/widgets/WidgetA.tsx'),
            name: 'WidgetA',
            fileName: (format) => `widget-a.${format}.js`,
            formats: ['umd'], // Solo UMD para compatibilidad global
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
          outDir: 'dist/widget-a',
        },
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      };
    }

    if (mode === 'widget-b') {
      return {
        plugins: [react()],
        build: {
          lib: {
            entry: path.resolve(__dirname, 'src/widgets/WidgetB.tsx'),
            name: 'WidgetB',
            fileName: (format) => `widget-b.${format}.js`,
            formats: ['umd'], // Solo UMD para compatibilidad global
          },
          rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
          outDir: 'dist/widget-b',
        },
        define: {
          'process.env.NODE_ENV': JSON.stringify('production'), 
        },
      };
    }

    return {}; 
  } else {
    return {
        plugins: [react()],
      }
  }
});