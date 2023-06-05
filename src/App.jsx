// Dependencies
import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
import { ROUTES_PATH } from "./consts";
import { Toaster } from "sonner";
import { useEffect } from "react";
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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  const [isShowClientsForm, setIsShowClientsForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [update, setUpdate] = useState();
  const { user  } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Toaster richColors />
      <Suspense fallback={<Loading />}>
        {/* ROUTES */}
        <Header
          isLogin={isLogin}
          showSideNav={showSideNav}
          setShowSideNav={setShowSideNav}
        />
        <Routes>
          {/* Home Route */}
          <Route
            path={ROUTES_PATH.HOME}
            element={<Home setShowSideNav={setShowSideNav} />}
          />
          {/* Auth routes */}
          <Route
            path={ROUTES_PATH.LOGIN}
            element={<Login isLogin={isLogin} />}
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
                  isShowClientsForm={isShowClientsForm}
                  setIsShowClientsForm={setIsShowClientsForm}
                  setShowSideNav={setShowSideNav}
                  update={update}
                  setUpdate={setUpdate}
                />
              }
            />
            {/* Tasks Route */}
            <Route
              path={ROUTES_PATH.TASKS}
              element={
                <Tasks
                  user={user}
                  isShowTasksForm={isShowTasksForm}
                  setIsShowTasksForm={setIsShowTasksForm}
                  setShowSideNav={setShowSideNav}
                  update={update}
                  setUpdate={setUpdate}
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
