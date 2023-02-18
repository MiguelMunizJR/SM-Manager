import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import NotFound from "./components/container/NotFound";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Tasks from "./components/tasks/Tasks";
import Settings from "./components/settings/Settings";
import Dashboard from "./components/dashboard/Dashboard";
import Account from "./components/account/Account";

function App() {
  const [isShowUsersForm, setIsShowUsersForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [update, setUpdate] = useState();

  return (
    <div className="flex">
      <NavBar
        setIsShowUsersForm={setIsShowUsersForm}
        setIsShowTasksForm={setIsShowTasksForm}
        setUpdate={setUpdate}
        activePage={activePage}
      />
      {/* ROUTES */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Home 
              activePage={activePage} 
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar} 
            />
          }
        />
        {/* Dashboard Route */}
        <Route 
          path="/dashboard"
          element={
            <Dashboard 
              activePage={activePage} 
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          }
        />
        {/* Account Route */}
        <Route 
          path="/users/me"
          element={
            <Account 
              activePage={activePage} 
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar}
            />
          }
        />
        {/* Users Route */}
        <Route
          path="/clients"
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
              activePage={activePage}
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar} 
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
              update={update}
              setUpdate={setUpdate}
              showDelete={showDelete}
              setShowDelete={setShowDelete}
              activePage={activePage}
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar} 
            />
          }
        />
        {/* Settings Route */}
        <Route
          path="/settings"
          element={
            <Settings 
              activePage={activePage} 
              setActivePage={setActivePage}
              setShowSideBar={setShowSideBar}
              showSideBar={showSideBar} 
            />
          }
        />
        {/* Route not found 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
