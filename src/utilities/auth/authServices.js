export const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

export const checkTokenValidity = () => {
  const token = localStorage.getItem("token");
  //! Verificar la validez del token en API 
  //TODO PENDIENTE

  !token && logout();
};

export const startTokenCheck = () => {
  setInterval(() => {
    checkTokenValidity();
  }, 1 * 30 * 1000);
};

