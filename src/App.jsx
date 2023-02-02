import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import NotFound from "./components/container/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Tasks from "./components/tasks/Tasks";
import Settings from "./components/settings/Settings";

function App() {
  const [isShowUsersForm, setIsShowUsersForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [update, setUpdate] = useState();

  return (
    <div className="flex">
      <NavBar
        setIsShowUsersForm={setIsShowUsersForm}
        setIsShowTasksForm={setIsShowTasksForm}
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
              isShowUsersForm={isShowUsersForm}
              setIsShowUsersForm={setIsShowUsersForm}
              update={update}
              setUpdate={setUpdate}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              showDelete={showDelete}
              setShowDelete={setShowDelete}
            />
          }
        />
        {/* Tasks Route */}
        <Route
          path="/tasks"
          element={
            <Tasks
              isShowTasksForm={isShowTasksForm}
              setIsShowTasksForm={setIsShowTasksForm}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setUpdate={setUpdate}
              showDelete={showDelete}
              setShowDelete={setShowDelete}
            />
          }
        />
        {/* Settings Route */}
        <Route path="/settings" element={<Settings />} />
        {/* Route not found 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
