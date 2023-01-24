import NavBar from "./components/navbar/NavBar";
import ContainerCrud from "./components/container/ContainerCrud";
import { useState } from "react";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  
  return (
    <div className="flex">
      <NavBar setIsShowForm={setIsShowForm} />
      <ContainerCrud isShowForm={isShowForm} setIsShowForm={setIsShowForm} />
    </div>
  );
}

export default App;
