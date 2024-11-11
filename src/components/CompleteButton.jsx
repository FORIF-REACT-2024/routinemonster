export default function CompleteButton() {
    return (
        <div>
            {/* 첫 번째 버튼 - 테두리만 있는 스타일 */}
            <button className="border border-blue-200 text-black font-medium w-10 h-7 rounded-lg">
                완료
            </button>

            {/* 두 번째 버튼 - 연한 파란색 배경 */}
            <button className="bg-blue-100 text-black font-medium w-10 h-7 rounded-lg">
                완료
            </button>

            {/* 세 번째 버튼 - 빨간색 배경 */}
            <button className="bg-red-300 text-black font-medium w-10 h-7 rounded-lg">
                완료
            </button>
        </div>
    );
}