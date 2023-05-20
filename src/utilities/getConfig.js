const token = localStorage.getItem("token");

const getConfig = () => {
  return {
    headers: {
      Authorization: `JWT ${token}`,
    },
  };
};

export default getConfig;
