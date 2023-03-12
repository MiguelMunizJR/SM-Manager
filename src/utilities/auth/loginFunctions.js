export const handleChange = (e) => {
  e.preventDefault();
  const eyeSlashIcon = document.querySelector(".button-pass");
  const xmarkIcon = document.querySelector(".button-email");
  const evt = e.target;

  if (evt.name === "password") {
    if (evt.value !== "") {
      eyeSlashIcon.classList.remove("hidden");
    } else {
      eyeSlashIcon.classList.add("hidden");
    }
  } else {
    if (evt.value !== "") {
      xmarkIcon.classList.remove("hidden");
    } else {
      xmarkIcon.classList.add("hidden");
    }
  }
  return;
};

export const handleShowPass = (showPass, setShowPass) => {
  const passInput = document.querySelector(".password");

  if (passInput.type === "password") {
    passInput.type = "text";
  } else {
    passInput.type = "password";
  }
  setShowPass(!showPass);
};

export const handleClearInput = () => {
  const emailInput = document.querySelector(".email");
  emailInput.value = "";

  const xmarkIcon = document.querySelector(".button-email");

  xmarkIcon.classList.add("hidden");
};