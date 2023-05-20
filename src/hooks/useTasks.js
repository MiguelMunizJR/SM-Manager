import { useEffect, useState } from "react";
import axios from "axios";

import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";

const useTasks = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllTasks = () => {
    const URL = `${URL_API}${ROUTES_PATH.TASKS}`;

    axios
      .get(URL, getConfig())
      .then((res) => {
        setTasks(res.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    getAllTasks();
  }, []);
  
  
  return { tasks, loading, error, getAllTasks };
};

export default useTasks;