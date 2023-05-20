import { ROUTES_PATH } from "../../consts";

const itemsNav = [
  {
    id: 1,
    title: "Home",
    route: ROUTES_PATH.HOME,
    icon: "fa-solid fa-house",
  },
  // {
  //   id: 2,
  //   title: "Account",
  // route: ROUTES_PATH.USER,
  //   icon: "fa-solid fa-user",
  // },
  {
    id: 3,
    title: "Clients",
    route: ROUTES_PATH.CLIENTS,
    icon: "fa-solid fa-users",
  },
  {
    id: 4,
    title: "Tasks",
    route: ROUTES_PATH.TASKS,
    icon: "fa-solid fa-list-check",
  },
  // {
  //   id: 6,
  //   title: "Settings",
  //   route: "/settings",
  //   icon: "fa-solid fa-gear",
  // },
];

export default itemsNav;
