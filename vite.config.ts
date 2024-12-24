import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          preserveModules: true,
        },
      },
      lib: {
        entry: {
          'widget-a': path.resolve(__dirname, 'src/widgets/WidgetA.tsx'),
          'widget-b': path.resolve(__dirname, 'src/widgets/WidgetB.tsx'),
        },
        name: 'Widgets',
        fileName: (format, entryName) => `${entryName}.${format}.js`,
      },
      outDir: 'dist',
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    base: './',
    define: {
      'process.env': {},
    },
  };
});