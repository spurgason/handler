import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useForgotPassword = defineStore("forgot-password", {
    state: () => ({
        form: useForm({
            email: "",
        }),
    }),
    actions: {
        submit() {
            this.form.post(route("password.email"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
