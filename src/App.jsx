import GoogleLoginButton from "./components/GoogleLoginButton";
import Profile from "./components/Profile";
import MakeRoutineButton from "./components/MakeRoutineButton";
import TimeSelector from "./components/TimeSelector";
import WriteNicknameInput from "./components/WriteNicknameInput";
import CompleteButton from "./components/CompleteButton";
import DeleteButton from "./components/DeleteButton";
import CalenderBox from "./components/CalenderBox";
import CalenderDay from "./components/CalenderDay";
import CommentInput from "./components/CommentInput";
import profileImage from './assets/profile1.jpg';
import CategoryBox from "./components/CategoryBox";
import RoutineItem from "./components/RoutineItem";
import TodayRoutineItem from "./components/TodayRoutineItem";

function App() {
  return (
    <div>
      <GoogleLoginButton />
      <Profile
        date="2024.10.05.토"
        nickname="닉네임"
        profileImage={profileImage}
        onTodayRoutinePress={() => {}}
        onCalendarPress={() => {}}
        onMyPagePress={() => {}}
        onRoutineGoalPress={() => {}}
      />
      <MakeRoutineButton />
      <WriteNicknameInput />
      <TimeSelector />
      <CompleteButton />
      <DeleteButton />
      <CalenderBox />
      <CalenderDay />
      <CommentInput />
      <CategoryBox />
      <RoutineItem />
      <TodayRoutineItem />
    </div>
  );
}

export default App;