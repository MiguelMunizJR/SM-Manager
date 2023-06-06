import { useEffect, useState } from "react";
import axios from "axios";

import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";
import { logout } from "../utilities/auth/authServices";
const token = localStorage.getItem("token");

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserInfo = () => {
    setLoading(true);
    const URL = `${URL_API}${ROUTES_PATH.USER}`;

    axios
      .get(URL, getConfig())
      .then((res) => {
        setUser(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        const token = err?.config?.headers?.Authorization;
        const status = err?.request?.status;

        //* Comprobamos que el token siga valido al entrar
        if (token && status === 401) {
          logout();
        }

        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (token) {
      getUserInfo();
    } else {
      setLoading(false);
    }
  }, [token]);

  return { user, loading, error, getUserInfo };
};

export default useUser;
