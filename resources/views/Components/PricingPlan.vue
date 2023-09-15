<script setup>
import PrimaryButton from "components/PrimaryButton.vue";

defineProps({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    perks: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="scale-100 bg-white rounded-lg p-6 shadow-md motion-safe:hover:scale-[1.03] transition-all duration-250">
        <h3 class="text-xl font-semibold mb-4">{{ name }} Plan</h3>
        <p class="text-3xl font-semibold text-blue-600">
            ${{ price }}<span class="text-gray-600 text-lg">/month</span>
        </p>
        <ul class="mt-4">
            <li
                class="flex items-center text-gray-700 mb-2"
                v-for="perk in perks"
            >
                <i class="fa-regular fa-square-plus mr-2"></i>
                {{ perk }}
            </li>
        </ul>
        <PrimaryButton
            href="#"
            class="mt-6"
            >Choose Plan</PrimaryButton
        >
    </div>
</template>
