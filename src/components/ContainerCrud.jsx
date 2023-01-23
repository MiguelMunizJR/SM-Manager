import SearchBar from "../utilities/SearchBar";
import CardContainer from "./UsersCard";

const ContainerCrud = () => {
  
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-zinc-200">
      <SearchBar />
      <CardContainer />
    </div>
  );
};

export default ContainerCrud;
