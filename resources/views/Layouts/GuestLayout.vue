<script setup>
import ApplicationLogo from 'components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link href="/">
               <ApplicationLogo class="fill-blue-600" />
            </Link>
        </div>

        <h1 class="mt-2 font-semibold text-2xl text-gray-500">Handler</h1>

        <div
            class="w-full sm:max-w-md mt-3 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
