import { useNavigate } from "react-router-dom";

export default function MakeRoutineButton() {
    const navigate = useNavigate();

		const handleNavigate = () => {
			// 원하는 페이지 경로로 이동
			navigate("/");
	};

    return (
        <div>
            <button onClick={handleNavigate} className="w-40 h-8 px-2 border border-blue-200 rounded-md text-xl text-center">
                Routine 작성하러 가기
            </button>
        </div>
    );
}