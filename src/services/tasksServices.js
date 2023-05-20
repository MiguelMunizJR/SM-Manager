import axios from "axios";
import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";

//TODO Tasks

//* Crear una nueva tarea
export const createNewTask = async (data) => {
  const URL = `${URL_API}${ROUTES_PATH.TASKS}`;

  try {
    await axios.post(URL, data, getConfig());
  } catch (error) {
    console.error(error);
  }
};

//* Actualizar una tarea
export const updateTask = async (data, update) => {
  const URL = `${URL_API}${ROUTES_PATH.TASKS}/${update?.id}`;

  try {
    await axios.patch(URL, data, getConfig());
  } catch (error) {
    console.error(error);
  }
};

//* Eliminar una tarea
export const deleteTask = async (id) => {
  const URL = `${URL_API}${ROUTES_PATH.TASKS}/${id}`;

  try {
    await axios.delete(URL, getConfig());
  } catch (error) {
    console.error(error);
  }
};

//* Completar tarea
export const completeTask = async (task) => {
  const URL = `${URL_API}${ROUTES_PATH.TASKS}/${task?.id}`;

  try {
    await axios.patch(
      URL,
      {
        status: task?.status === "completed" ? "not_completed" : "completed",
      },
      getConfig()
    );
  } catch (error) {
    console.error(error);
  }
};
