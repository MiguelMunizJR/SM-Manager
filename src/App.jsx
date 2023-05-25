// Dependencies
import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useUser from "./hooks/useUser";
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

function App() {
  const [isLogin, setIsLogin] = useState();
  const [showSideNav, setShowSideNav] = useState(false);
  const [isShowClientsForm, setIsShowClientsForm] = useState(false);
  const [isShowTasksForm, setIsShowTasksForm] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [update, setUpdate] = useState();
  const { user, loading } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  if (isLogin && loading) {
    return <Loading />;
  } else {
    return (
      <div className="w-full min-h-screen bg-slate-50">
        <Toaster richColors />
        <Suspense fallback={<Loading />}>
          {/* ROUTES */}
          <Header 
            user={user} 
            activePage={activePage} 
            isLogin={isLogin}
            showSideNav={showSideNav}
            setShowSideNav={setShowSideNav}
          />
          <Routes>
            {/* Home Route */}
            <Route
              path={ROUTES_PATH.HOME}
              element={
                <Home
                  activePage={activePage}
                  setActivePage={setActivePage}
                  isLogin={isLogin}
                  setShowSideNav={setShowSideNav}
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
                <Register isLogin={isLogin} setActivePage={setActivePage} />
              }
            />

            {/* Route not found 404 */}
            <Route path={ROUTES_PATH.NOT_FOUND} element={<NotFound />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoutes isLogin={isLogin} />}>
              {/* Clients Route */}
              <Route
                path={ROUTES_PATH.CLIENTS}
                element={
                  <Clients
                    user={user}
                    isLogin={isLogin}
                    isShowClientsForm={isShowClientsForm}
                    setIsShowClientsForm={setIsShowClientsForm}
                    setShowSideNav={setShowSideNav}
                    update={update}
                    setUpdate={setUpdate}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                }
              />
              {/* Tasks Route */}
              <Route
                path={ROUTES_PATH.TASKS}
                element={
                  <Tasks
                    user={user}
                    isLogin={isLogin}
                    isShowTasksForm={isShowTasksForm}
                    setIsShowTasksForm={setIsShowTasksForm}
                    setShowSideNav={setShowSideNav}
                    update={update}
                    setUpdate={setUpdate}
                    activePage={activePage}
                    setActivePage={setActivePage}
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
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    );
  }
}

export default App;
