import { ROUTES_PATH } from "../../consts";

const itemsHome = [
  {
    id: 1,
    title: "Clients",
    icon: "fa-solid fa-users",
    route: ROUTES_PATH.CLIENTS,
    image: "https://i.postimg.cc/HkgpDkTX/clients-home.png",
    className:
      "w-full md:max-w-lg h-52 py-4 flex flex-col rounded-lg text-gray-50 bg-gradient-to-bl from-blue-600 to-sky-400 drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition-all duration-250 hover:transform hover:scale-105",
  },
  {
    id: 2,
    title: "Tasks",
    icon: "fa-solid fa-list-check",
    route: ROUTES_PATH.TASKS,
    image: "https://i.postimg.cc/Wbr2Hkcs/tasks-home.png",
    className:
      "w-full md:max-w-lg h-52 py-4 flex flex-col rounded-lg text-gray-50 bg-gradient-to-bl from-orange-500 to-yellow-300 drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition-all duration-250 hover:transform hover:scale-105",
  },
];

export default itemsHome;
