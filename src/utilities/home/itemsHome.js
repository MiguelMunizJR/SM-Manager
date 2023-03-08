const itemsHome = [
  {
    id: Math.floor(Math.random * 1000),
    title: "Clients",
    icon: "fa-solid fa-users",
    route: "/clients",
    image: "https://i.postimg.cc/HkgpDkTX/clients-home.png",
    className: "w-full md:max-w-lg h-52 py-4 flex flex-col rounded-lg text-gray-50 bg-gradient-to-bl from-blue-600 to-sky-400 drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition-all duration-250 hover:transform hover:scale-105"
  },
  {
    id: Math.floor(Math.random * 1000),
    title: "Tasks",
    icon: "fa-solid fa-list-check",
    route: "/tasks",
    image: "https://i.postimg.cc/Wbr2Hkcs/tasks-home.png",
    className: "w-full md:max-w-lg h-52 py-4 flex flex-col rounded-lg text-gray-50 bg-gradient-to-bl from-orange-500 to-yellow-300 drop-shadow-lg hover:drop-shadow-2xl cursor-pointer transition-all duration-250 hover:transform hover:scale-105"
  },
  // {
  //   id: Math.floor(Math.random * 1000),
  //   title: "Dashboard",
  //   icon: "fa-solid fa-gauge",
  //   route: "/dashboard",
];

export default itemsHome;
