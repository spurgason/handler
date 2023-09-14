import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useConfirmPassword = defineStore("confirm-password", {
    state: () => ({
        form: useForm({
            email: "",
            password: "",
            remember: false,
        }),
    }),
    actions: {
        submit() {
            this.form.post(route("password.confirm"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
