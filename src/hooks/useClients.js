import { useEffect, useState } from "react";
import axios from "axios";

import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";
const token = localStorage.getItem("token");


const useClients = () => {
  const [clients, setClients] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllClients = () => {
    const URL = `${URL_API}${ROUTES_PATH.CLIENTS}`;

    axios
      .get(URL, getConfig())
      .then((res) => {
        setClients(res.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    if (token) {
      getAllClients();
    }
  }, []);
  
  
  return { clients, loading, error, getAllClients };
};

export default useClients;