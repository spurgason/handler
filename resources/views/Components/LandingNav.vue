<script setup>
import {Link} from "@inertiajs/vue3";

</script>

<template>
    <nav class="bg-blue-500 p-4">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <a href="#" class="text-white text-2xl font-bold"
                ><i class="fa-solid fa-shield-dog mr-2"></i>Handler</a
                >
                <ul class="flex space-x-4">
                    <li>
                        <Link
                            :href="route('features')"
                            class="text-white hover:text-gray-200"
                        >Features
                        </Link
                        >
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-gray-200"
                        >Pricing</a
                        >
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-gray-200"
                        >Contact</a
                        >
                    </li>
                    <li>
                        <Link
                            :href="route('login')"
                            class="text-white hover:text-gray-200"
                        >Log in
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
