export default function OngoingButton() {
    return (
        <div className="space-x-[12px]">
            {/* 진행중 버튼 */}
            <button className="w-[54px] h-[40px] bg-blue-200 text-black rounded-full">
                진행중
            </button>

            {/* 진행완료 버튼 */}
            <button className="w-[71px] h-[40px] bg-blue-200 text-black rounded-full">
                진행완료
            </button>

            {/* 진행예정 버튼 */}
            <button className="w-[71px] h-[40px] bg-blue-200 text-black rounded-full">
                진행예정
            </button>
        </div>
    );
}