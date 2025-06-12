import { toast } from "react-toastify";

export const AuthToasts = {
    loginSuccess: () => {
        toast.success("Login realizado com sucesso", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem("theme") || "light",
        });
    },

    credentialsError: () => {
        toast.error("Usuário ou senha inválidos", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem("theme") || "light",
        });
    },
    defaultError: () => {
        toast.error("Alguma coisa deu errado", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: localStorage.getItem("theme") || "light",
        });
    },
};
