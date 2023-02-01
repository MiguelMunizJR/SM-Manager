import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import NotFound from "./components/container/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Tasks from "./components/tasks/Tasks";

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
      {/* ROUTES */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/* Users Route */}
        <Route
          path="/users"
          element={
            <Users
              isShowForm={isShowForm}
              setIsShowForm={setIsShowForm}
              update={update}
              setUpdate={setUpdate}
            />
          }
        />
        {/* Tasks Route */}
        <Route path="/tasks" element={<Tasks />} />
        {/* Route not found 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
