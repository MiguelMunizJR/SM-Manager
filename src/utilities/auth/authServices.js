import { toast } from "sonner";

export const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

export const checkTokenValidity = (userToken) => {
  const token = localStorage.getItem("token");

  //* Comprobamos el token
  if (userToken !== token) {
    toast.error("Token has expirated");
    setTimeout(() => {
      logout();
    }, 3000); //* Delay de 3 segundos
  }
  return;
};

export const startTokenCheck = (userToken) => {
  setInterval(() => {
    checkTokenValidity(userToken);
  }, 1 * 60 * 1000); //* Validamos el token cada minuto
};
