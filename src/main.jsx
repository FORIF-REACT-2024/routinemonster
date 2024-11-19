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
<<<<<<< Updated upstream
=======
import CalenderMain from "./pages/CalenderMain.jsx";
import RoutineAdd from "./pages/RoutineAdd.jsx";
import RoutineList from "./pages/RoutineList.jsx";
import SignupCompletePage from "./pages/SignupCompletePage.jsx";
import Profile from "./components/Profile.jsx";
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/easteregg",
    element: <Easteregg />,
  },
  {
    path: "/today",
    element: <RoutineToday />,
<<<<<<< Updated upstream
=======
  },
  {
    path: "/Calender",
    element: <CalenderMain />,
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
    path: "/SignupCompletePage",
    element: <SignupCompletePage />,
  },
  {
    path: "/Profile",
    element: <Profile />,
>>>>>>> Stashed changes
  }
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