export default function OngoingButton({ type, onClick, selected }) {
    const buttonStyles = selected
        ? "w-[54px] h-[40px] rounded-full bg-blue-500 text-white"
        : "w-[54px] h-[40px] rounded-full bg-blue-200 text-black";
    return (
        <button
            className={buttonStyles}
            onClick={() => onClick(type)}
        >
            {type === 'ongoing' ? '진행중' : type === 'completed' ? '진행완료' : '진행예정'}
        </button>
    );
}
