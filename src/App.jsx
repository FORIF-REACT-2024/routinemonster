import CategoryButton from "./components/CategoryBox";
import DeleteButton from "./components/DeleteButton";
import CommentInput from "./components/CommentInput";

function App() {

  return (
    <div>
      <CategoryButton category={3} />
      <DeleteButton/>
      <CommentInput/>
    </div>
  );
}

export default App;