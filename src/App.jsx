import NavBar from "./components/navbar/NavBar";
import ContainerCrud from "./components/container/ContainerCrud";
import { useState } from "react";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  const [update, setUpdate] = useState();

  return (
    <div className="flex">
      <NavBar
        setIsShowForm={setIsShowForm}
        update={update}
        setUpdate={setUpdate}
      />
      <ContainerCrud
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
}

export default App;
