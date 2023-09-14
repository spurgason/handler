import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.js",
            refresh: ['resources/**'],
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        host: "0.0.0.0",
        hmr: {
            host: "localhost",
        },
    },
    resolve: {
        alias: {
            '@': '/resources',
            components: '/resources/views/Components',
            layouts: '/resources/views/Layouts',
            stores: '/resources/js/stores'
        }
    }
});
