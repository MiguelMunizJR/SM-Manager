//TODO Clients

import axios from "axios";
import { ROUTES_PATH, URL_API } from "../consts";
import getConfig from "../utilities/getConfig";

//* Crear un nuevo cliente
export const createNewClient = async (data) => {
  const URL = `${URL_API}${ROUTES_PATH.CLIENTS}`;

  try {
    await axios.post(URL, data, getConfig());
  } catch (error) {
    console.error(error);
  }
};

//* Actualizar cliente
export const updateClient = async (data, update) => {
  const URL = `${URL_API}${ROUTES_PATH.CLIENTS}/${update?.id}`;

  try {
    await axios.patch(URL, data, getConfig());
  } catch (error) {
    console.error(error);
  }
};

//* Eliminar un cliente
export const deleteClient = async (id) => {
  const URL = `${URL_API}${ROUTES_PATH.CLIENTS}/${id}`;

  try {
    await axios.delete(URL, getConfig());
  } catch (error) {
    console.error(error);
  }
};