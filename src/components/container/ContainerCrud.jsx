import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
import HeaderUser from "./HeaderUser";
import UsersCard from "../users/UsersCard";
import FormModal from "./FormModal";

const ContainerCrud = ({ isShowForm, setIsShowForm }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users";

    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isShowForm ? (
        <FormModal setIsShowForm={setIsShowForm} getAllUsers={getAllUsers} />
      ) : null}
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200">
        <article className="w-full mt-3 flex justify-between">
          <SearchBar />
          <HeaderUser setIsShowForm={setIsShowForm} />
        </article>
        <UsersCard getAllUsers={getAllUsers} users={users} />
      </section>
    </>
  );
};

export default ContainerCrud;
