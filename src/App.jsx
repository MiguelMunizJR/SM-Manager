import NavBar from "./components/NavBar";
import ContainerCrud from "./components/ContainerCrud";
import { useState } from "react";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  console.log(isShowForm);
  
  return (
    <div className="flex">
      <NavBar setIsShowForm={setIsShowForm} />
      <ContainerCrud isShowForm={isShowForm} setIsShowForm={setIsShowForm} />
    </div>
  );
}

export default App;
