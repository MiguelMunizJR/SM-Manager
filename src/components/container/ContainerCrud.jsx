import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
import HeaderUser from "./HeaderUser";
import UsersCard from "../users/UsersCard";
import FormModal from "./FormModal";

const ContainerCrud = ({ isShowForm, setIsShowForm, update, setUpdate }) => {
  const [users, setUsers] = useState([]);
  const [isAnimatedModal, setIsAnimatedModal] = useState(false);

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
        <>
          <FormModal
            setIsShowForm={setIsShowForm}
            getAllUsers={getAllUsers}
            isAnimatedModal={isAnimatedModal}
            setIsAnimatedModal={setIsAnimatedModal}
            update={update}
          />
          <section className="w-screen h-screen fixed inset-0 bg-slate-300 z-10 opacity-25"></section>
        </>
      ) : null}
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200">
        <article className="w-full mt-3 flex justify-between">
          <SearchBar />
          <HeaderUser
            setIsShowForm={setIsShowForm}
            setIsAnimatedModal={setIsAnimatedModal}
            setUpdate={setUpdate}
          />
        </article>
        <UsersCard
          getAllUsers={getAllUsers}
          users={users}
          setUpdate={setUpdate}
          setIsShowForm={setIsShowForm}
        />
      </section>
    </>
  );
};

export default ContainerCrud;
