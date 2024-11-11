import GoogleLogin from "./components/googleLogin";
import MakeRoutine from "./components/makeRoutine";
import TimeSelector from "./components/TimeSelector";
import WriteNickname from "./components/WriteNickname";
import CompleteButton from "./components/CompleteButton";

function App() {

  return (
    <div>
      <GoogleLogin />
      <MakeRoutine />
      <WriteNickname />
      <TimeSelector />
      <CompleteButton />
    </div>
  );
}

export default App;
