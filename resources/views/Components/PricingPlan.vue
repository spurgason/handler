<script setup>
import PrimaryButton from "components/PrimaryButton.vue";

const plans = [
    {
        name: "Basic",
        price: "19",
        perks: ["Unlimited Features", "24/7 Support"],
    },
    {
        name: "Pro",
        price: "49",
        perks: ["Unlimited Features", "Priority Support"],
    },
    {
        name: "Enterprise",
        price: "99",
        perks: ["Unlimited Features", "VIP Support"],
    },
];

</script>

<template>
    <div class="scale-100 bg-white rounded-lg p-6 shadow-md motion-safe:hover:scale-[1.03] transition-all duration-250"
    v-for="plan in plans">
        <h3 class="text-xl font-semibold mb-4">{{ plan.name }} Plan</h3>
        <p class="text-3xl font-semibold text-blue-600">
            ${{ plan.price }}<span class="text-gray-600 text-lg">/month</span>
        </p>
        <ul class="mt-4">
            <li
                class="flex items-center text-gray-700 mb-2"
                v-for="perk in plan.perks"
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
