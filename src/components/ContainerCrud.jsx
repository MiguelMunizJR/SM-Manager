import SearchBar from "../utilities/SearchBar";
import HeaderUser from "./HeaderUser";
import UsersCard from "./UsersCard";

const ContainerCrud = () => {
  
  return (
    <section className="w-full h-screen flex flex-col justify-between bg-zinc-200">
      <article className="w-full mt-4 flex justify-between">
        <SearchBar />
        <HeaderUser />
      </article>
      <UsersCard />
    </section>
  );
};

export default ContainerCrud;
