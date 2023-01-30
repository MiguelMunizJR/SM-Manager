import NavBar from "./components/navbar/NavBar";
import ContainerUsers from "./components/users/ContainerUsers";
import NotFound from "./components/container/NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ContainerTasks } from "./components/tasks/ContainerTasks";

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
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ContainerUsers
                isShowForm={isShowForm}
                setIsShowForm={setIsShowForm}
                update={update}
                setUpdate={setUpdate}
              />
            }
          />
          <Route path="/tasks" element={<ContainerTasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
