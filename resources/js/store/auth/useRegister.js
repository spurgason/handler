import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useRegister = defineStore("register", {
    state: () => ({
        form: useForm({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }),
    }),
    actions: {
        submit() {
            this.form.post(route("register"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
