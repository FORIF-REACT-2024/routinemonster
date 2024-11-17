import { useNavigate } from "react-router-dom";

export default function OngoingButton({ type }) {
    const navigate = useNavigate();
    const clickButton = () => {
        if (type === 'ongoing') {
            navigate('/ongoing-routines');
        } else if (type === 'completed') {
            navigate ('/completed-routines')
        } else if (type === 'upcoming') {
            navigate ('/upcoming-routines')
        }
    };

    return (
        <button
            className = "w-[54px] h-[40px] bg-blue-200 text-black rounded-full"
            onClick = {clickButton}
        >
            {type === 'ongoing'? '진행중': type === 'completed'? '진행완료': '진행예정'}
        </button>

        
    );
}