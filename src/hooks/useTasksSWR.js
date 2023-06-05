import useSWR from "swr";
import axios from "axios";

import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";

const URL = `${URL_API}${ROUTES_PATH.TASKS}`;

const useTasksSWR = () => {
  const { data: tasks, error } = useSWR(URL, () => getAllTasks(URL));
  const loading = !tasks && !error;

  const getAllTasks = async (URL) => {
    try {
      const response = await axios.get(URL, getConfig());
      return response.data?.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { tasks, loading, error, getAllTasks };
};

export default useTasksSWR;