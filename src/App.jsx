import NavBar from "./components/navbar/NavBar";
import ContainerUsers from "./components/container/ContainerUsers";
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
      <ContainerUsers
        isShowForm={isShowForm}
        setIsShowForm={setIsShowForm}
        update={update}
        setUpdate={setUpdate}
      />
    </div>
  );
}

export default App;
