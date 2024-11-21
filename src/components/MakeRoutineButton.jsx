import { Link } from "react-router-dom";

export default function MakeRoutineButton() {
    return (
        <Link to="/Calender/:month" className="w-40 h-8 px-2 border border-blue-200 rounded-md text-xl text-center">
            Routine 작성하러 가기
        </Link>
    );
}