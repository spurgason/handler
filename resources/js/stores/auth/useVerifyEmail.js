import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useVerifyEmail = defineStore("verify-email", {
    state: () => ({
        form: useForm({}),
    }),
    actions: {
        submit() {
            this.form.post(route("verification.send"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
