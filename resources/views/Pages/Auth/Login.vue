<script setup>
import Checkbox from "components/Checkbox.vue";
import GuestLayout from "layouts/GuestLayout.vue";
import InputError from "components/InputError.vue";
import InputLabel from "components/InputLabel.vue";
import PrimaryButton from "components/PrimaryButton.vue";
import TextInput from "components/TextInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { useLogin } from "stores/auth/useLogin";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useLogin().form;
const submit = useLogin().submit;
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-between mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>

                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Forgot your password?
                </Link>
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>

            <div class="text-sm flex justify-center gap-1 mt-8">
                <span class="text-gray-900"> Not a member? </span>
                <Link
                    :href="route('register')"
                    class="underline rounded-md text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:text-blue-900"
                >
                    Register here
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
