<script setup>

const features = [
    {
        title: "Client Management",
        body: "New Feat",
    },
    {
        title: "Planing and Tracking",
        body: "New Feat",
    },
    {
        title: "Document Management",
        body: "New Feat",
    },
];
</script>

<template>
    <div
        class="scale-100 bg-white rounded-lg p-6 shadow-md motion-safe:hover:scale-[1.03] transition-all duration-250"
        v-for="feature in features"
    >
        <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
        <p class="text-gray-700">
            {{ feature.body }}
        </p>
    </div>
</template>
