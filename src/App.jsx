// Dependencies
import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import useUser from "./hooks/useUser";
import { ROUTES_PATH } from "./consts";
import { Toaster } from "sonner";
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
  const [isLogin, setIsLogin] = useState();
  const [isShowUsersForm, setIsShowUsersForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [update, setUpdate] = useState();
  const { getUserInfo } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
      getUserInfo();
    }
  }, [isLogin]);

  return (
    <div className="flex">
      <Toaster richColors />
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
            isLogin={isLogin}
          />
        </motion.header>

        <Routes>
          {/* Home Route */}
          <Route
            path={ROUTES_PATH.HOME}
            element={
              <Home
                activePage={activePage}
                setActivePage={setActivePage}
                setShowSideBar={setShowSideBar}
                showSideBar={showSideBar}
              />
            }
          />
          {/* Auth routes */}
          <Route
            path={ROUTES_PATH.LOGIN}
            element={
              <Login
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setActivePage={setActivePage}
              />
            }
          />
          <Route
            path={ROUTES_PATH.REGISTER}
            element={
              <Register
                isLogin={isLogin}
                setActivePage={setActivePage}
              />
            }
          />

          {/* Route not found 404 */}
          <Route path={ROUTES_PATH.NOT_FOUND} element={<NotFound />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            {/* Clients Route */}
            <Route
              path={ROUTES_PATH.CLIENTS}
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
                />
              }
            />
            {/* Tasks Route */}
            <Route
              path={ROUTES_PATH.TASKS}
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
                />
              }
            />
            {/* Account Route */}
            <Route
              path={ROUTES_PATH.USER}
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
