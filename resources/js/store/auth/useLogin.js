import { useForm } from "@inertiajs/vue3";
import { defineStore } from "pinia";

export const useLogin = defineStore("login", {
    state: () => ({
        form: useForm({
            email: "",
            password: "",
            remember: false,
        }),
    }),
    actions: {
        submit() {
            this.form.post(route("login"), {
                onFinish: () => this.$reset(),
            });
        },
    },
});
