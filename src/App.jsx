import GoogleLogin from "./components/googleLogin";
import MakeRoutine from "./components/makeRoutine";
import TimeSelector from "./components/TimeSelector";
import WriteNickname from "./components/WriteNickname";
import CompleteButton from "./components/CompleteButton";
import DeleteButton from "./components/DeleteButton";
import WriteComments from "./components/WriteComments";

function App() {

  return (
    <div>
      <GoogleLogin />
      <MakeRoutine />
      <WriteNickname />
      <TimeSelector />
      <CompleteButton />
      <WriteComments/>
      <DeleteButton/>
    </div>
  );
}

export default App;
