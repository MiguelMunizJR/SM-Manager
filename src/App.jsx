import Home from "./components/home/Home";
import Users from "./components/users/Users";
import NotFound from "./components/container/NotFound";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Tasks from "./components/tasks/Tasks";
import Settings from "./components/settings/Settings";
import Dashboard from "./components/dashboard/Dashboard";
import Account from "./components/account/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Header from "./components/container/Header";
import axios from "axios";
import Loading from "./components/loading/Loading";

function App() {
  const [isShowUsersForm, setIsShowUsersForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [update, setUpdate] = useState();
  const [userSession, setUserSession] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    token && getUserInfo();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const loadingEnd = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.reload();
      setIsLoading(false);
    }, 10);
  };

  const getUserInfo = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users/me";

    axios
      .get(URL, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        setUserSession(res?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <Loading isLoading={isLoading} />
      {/* ROUTES */}
      {activePage !== "/auth" ? (
        <Header
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
          userSession={userSession}
        />
      ) : null}

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
              userSession={userSession}
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
        <Route
          path="/auth/login"
          element={
            <Login
              setActivePage={setActivePage}
              activePage={activePage}
              getUserInfo={getUserInfo}
              loadingEnd={loadingEnd}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/auth/register"
          element={<Register setActivePage={setActivePage} setIsLoading={setIsLoading} />}
        />

        {/* Route not found 404 */}
        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          {/* Clients Route */}
          <Route
            path="/clients"
            element={
              <Users
                isShowUsersForm={isShowUsersForm}
                setIsShowUsersForm={setIsShowUsersForm}
                update={update}
                setUpdate={setUpdate}
                setIsLoading={setIsLoading}
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                activePage={activePage}
                setActivePage={setActivePage}
                setShowSideBar={setShowSideBar}
                showSideBar={showSideBar}
                userSession={userSession}
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
                setIsLoading={setIsLoading}
                update={update}
                setUpdate={setUpdate}
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                activePage={activePage}
                setActivePage={setActivePage}
                setShowSideBar={setShowSideBar}
                showSideBar={showSideBar}
                userSession={userSession}
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
