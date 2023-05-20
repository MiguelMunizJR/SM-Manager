import axios from "axios";
import { useEffect, useState } from "react";
import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserInfo = () => {
    const URL = `${URL_API}${ROUTES_PATH.USER}`;

    axios
      .get(URL, getConfig())
      .then((res) => {
        setUser(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  
  return { user, loading, error, getUserInfo };
};

export default useUser;