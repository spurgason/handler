<script setup>

defineProps({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="scale-100 bg-white rounded-lg p-6 shadow-md motion-safe:hover:scale-[1.03] transition-all duration-250"
    >
        <h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
        <p class="text-gray-700">
            {{ body }}
        </p>
    </div>
</template>
