const itemsHome = [
  {
    id: Math.floor(Math.random * 1000),
    title: "Clients",
    icon: "fa-solid fa-users",
    route: "/clients",
    image: "https://i.postimg.cc/HkgpDkTX/clients-home.png",
    className:
      "w-full h-72 p-4 flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-50 cursor-pointer transition-all duration-250 hover:transform hover:scale-105 hover:drop-shadow-xl",
  },
  {
    id: Math.floor(Math.random * 1000),
    title: "Tasks",
    icon: "fa-solid fa-list-check",
    route: "/tasks",
    image: "https://i.postimg.cc/Wbr2Hkcs/tasks-home.png",
    className:
      "w-full h-72 p-4 flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-50 cursor-pointer transition-all duration-250 hover:transform hover:scale-105 hover:drop-shadow-xl",
  },
  // {
  //   id: Math.floor(Math.random * 1000),
  //   title: "Dashboard",
  //   icon: "fa-solid fa-gauge",
  //   route: "/dashboard",
  //   className:
  //     "w-full h-36 flex rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer",
  // },
];

export default itemsHome;
