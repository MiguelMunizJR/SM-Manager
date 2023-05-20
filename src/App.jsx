// Dependencies
import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
// Components & utils
const Users = lazy(() => import("./components/users/Users"));
const Home = lazy(() => import("./components/home/Home"));
const NotFound = lazy(() => import("./components/NotFound"));
const Tasks = lazy(() => import("./components/tasks/Tasks"));
const Account = lazy(() => import("./components/Account"));
const ProtectedRoutes = lazy(() => import("./components/ProtectedRoutes"));
const Login = lazy(() => import("./components/auth/login/Login"));
const Register = lazy(() => import("./components/auth/register/Register"));
const Header = lazy(() => import("./components/container/Header"));
const Loading = lazy(() => import("./components/Loading"));

function App() {
  const [isShowUsersForm, setIsShowUsersForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [update, setUpdate] = useState();
  const [userSession, setUserSession] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    token && getUserInfo();
  }, []);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <Suspense fallback={<Loading />}>
        {/* ROUTES */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <Header
            activePage={activePage}
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
            userSession={userSession}
          />
        </motion.header>

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
          <Route
            path="/auth/login"
            element={
              <Login
                setActivePage={setActivePage}
                activePage={activePage}
                getUserInfo={getUserInfo}
              />
            }
          />
          <Route
            path="/auth/register"
            element={
              <Register
                setActivePage={setActivePage}
              />
            }
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
      </Suspense>
    </div>
  );
}

export default App;
