import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import RoutineToday from "./pages/RoutineToday.jsx";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutineAdd from "./pages/RoutineAdd.jsx";
import RoutineList from "./pages/RoutineList.jsx";
import LoginCompletePage from "./pages/LoginCompletePage.jsx";
import Main from "./pages/Main.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import CalendarMain from "./pages/CalendarMain.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LandingPage />
  },
  {
    path: "/LoginCompletePage",
    element: <LoginCompletePage />,
  },
  { 
    path: "/",
    element: <App />, // "/" 경로에서는 App 컴포넌트를 직접 렌더링
  },
  {
    path: "/",
    element: <Main />, // Main을 고정 레이아웃으로 사용
    children: [
      {
        path: "/today",
        element: <RoutineToday />,
      },
      {
        path: "/Calendar",
        element: <CalendarMain />,
      },
      {
        path: "/Add",
        element: <RoutineAdd />,
      },
      {
        path: "/routine-lists",
        element: <RoutineList />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 알림 설정 */}
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme="dark"
      transition={Slide}
    />
    <RouterProvider router={router} />
  </StrictMode>
);