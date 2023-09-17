<script setup>
import {Head} from "@inertiajs/vue3";
import FeatureCard from "components/FeatureCard.vue";
import PricingPlan from "components/PricingPlan.vue";
import PrimaryButton from "components/PrimaryButton.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <Head title="Welcome"/>

    <body class="bg-gray-100 font-sans">
    <!-- Navigation Bar -->
    <nav class="bg-blue-500 p-4">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <a href="#" class="text-white text-2xl font-bold"
                ><i class="fa-solid fa-shield-dog mr-2"></i>Handler</a
                >
                <ul class="flex space-x-4">
                    <li>
                        <a href="#" class="text-white hover:text-gray-200"
                        >Home</a
                        >
                    </li>
                    <li>
                        <a href="#" class="text-white hover:text-gray-200"
                        >Features</a
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
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section
        class="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white"
    >
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">
                Welcome to Handler
            </h1>
            <p class="text-lg mb-8">
                A powerful solution for trainers.
            </p>
            <PrimaryButton
                :hue=700
                href="#"
            >Get Started
            </PrimaryButton
            >
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
        <div class="container mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold">Key Features</h2>
                <p class="text-gray-600 mt-2">
                    Discover what makes our app unique.
                </p>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <FeatureCard></FeatureCard>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="bg-gray-100 py-16">
        <div class="container mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold">Pricing Plans</h2>
                <p class="text-gray-600 mt-2">
                    Choose the plan that suits your needs.
                </p>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <PricingPlan></PricingPlan>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section
        class="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white"
    >
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
            <p class="text-lg mb-8">
                Have a question? Feel free to get in touch with us.
            </p>
            <PrimaryButton
                href="#"
            >Contact Us
            </PrimaryButton
            >
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto text-center">
            <p>&copy; 2023 Handler App. All rights reserved.</p>
        </div>
    </footer>
    </body>
</template>
