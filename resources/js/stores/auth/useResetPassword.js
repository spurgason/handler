import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useResetPassword = defineStore("reset-password", {
    state: () => ({
        form: useForm({
            token: null,
            email: null,
            password: "",
            password_confirmation: "",
        }),
    }),
    actions: {
        submit() {
            this.form.post(route("password.store"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
