// Dependencies
import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES_PATH } from "./consts";
import { Toaster } from "sonner";
// Components & utils
const Clients = lazy(() => import("./components/clients/Clients"));
const Home = lazy(() => import("./components/home/Home"));
const NotFound = lazy(() => import("./components/NotFound"));
const Tasks = lazy(() => import("./components/tasks/Tasks"));
const Account = lazy(() => import("./components/Account"));
const ProtectedRoutes = lazy(() => import("./components/ProtectedRoutes"));
const Login = lazy(() => import("./components/auth/login/Login"));
const Register = lazy(() => import("./components/auth/register/Register"));
const Header = lazy(() => import("./components/container/Header"));
const Loading = lazy(() => import("./components/Loading"));
import useUser from "./hooks/useUser";
import { startTokenCheck } from "./utilities/auth/authServices";

const storedToken = localStorage.getItem("token");

function App() {
  const [isLogin, setIsLogin] = useState(null);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isShowClientsForm, setIsShowClientsForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [update, setUpdate] = useState();
  const [tasksCounter, setTasksCounter] = useState(null);
  const [clientsCounter, setClientsCounter] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (storedToken) {
      startTokenCheck(storedToken);
      setIsLogin(true);
      setClientsCounter(user?.clients?.length);
      setTasksCounter(user?.tasks?.length);
    }
  }, [isLogin, user]);

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Toaster richColors />
      <Suspense fallback={<Loading />}>
        {/* ROUTES */}
        <Header
          isLogin={isLogin}
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
          tasksCounter={tasksCounter}
          clientsCounter={clientsCounter}
        />
        <Routes>
          {/* Home Route */}
          <Route
            path={ROUTES_PATH.HOME}
            element={
              <Home
                isLogin={isLogin}
                clientsCounter={clientsCounter}
                tasksCounter={tasksCounter}
                setShowSideNav={setShowSideNav}
                storedToken={storedToken}
              />
            }
          />
          {/* Auth routes */}
          <Route
            path={ROUTES_PATH.LOGIN}
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route
            path={ROUTES_PATH.REGISTER}
            element={<Register isLogin={isLogin} />}
          />

          {/* Route not found 404 */}
          <Route path={ROUTES_PATH.NOT_FOUND} element={<NotFound />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoutes isLogin={user} />}>
            {/* Clients Route */}
            <Route
              path={ROUTES_PATH.CLIENTS}
              element={
                <Clients
                  user={user}
                  setClientsCounter={setClientsCounter}
                  isShowClientsForm={isShowClientsForm}
                  setIsShowClientsForm={setIsShowClientsForm}
                  setShowSideNav={setShowSideNav}
                  update={update}
                  setUpdate={setUpdate}
                  storedToken={storedToken}
                />
              }
            />
            {/* Tasks Route */}
            <Route
              path={ROUTES_PATH.TASKS}
              element={
                <Tasks
                  user={user}
                  setTasksCounter={setTasksCounter}
                  isShowTasksForm={isShowTasksForm}
                  setIsShowTasksForm={setIsShowTasksForm}
                  setShowSideNav={setShowSideNav}
                  update={update}
                  setUpdate={setUpdate}
                  storedToken={storedToken}
                />
              }
            />
            {/* Account Route */}
            <Route path={ROUTES_PATH.USER} element={<Account />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
