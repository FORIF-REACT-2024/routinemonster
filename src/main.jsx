import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Easteregg from "./pages/Easteregg.jsx";
import RoutineToday from "./pages/RoutineToday.jsx";
// 토스트 알림 띄우기 위해 쓰는 라이브러리
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CalenderMain from "./pages/CalenderMain.jsx";
import RoutineAdd from "./pages/RoutineAdd.jsx";
import RoutineList from "./pages/RoutineList.jsx";
import SignupCompletePage from "./pages/SignupCompletePage.jsx";
import Main from "./pages/Main.jsx";
import RadningPage from "./pages/RandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <RadningPage />
  },
  {
    path: "/SignupCompletePage",
    element: <SignupCompletePage />,
  },
  { 
    path: "/",
    element: <Main />, // Main을 고정 레이아웃으로 사용
    children: [
      {
        path: "/",
        element: <RoutineToday />,
      },
      
      {
        path: "/easteregg",
        element: <Easteregg />,
      },
      {
        path: "/today",
        element: <RoutineToday />,
      },
      {
        path: "/Calender",
        element: <CalenderMain month={11} />,
      },
      {
        path: "/Add",
        element: <RoutineAdd />,
      },
      {
        path: "/routine-lists",
        element: <RoutineList />,
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