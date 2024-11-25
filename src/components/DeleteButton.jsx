import React from "react";
import axios from "axios";

function DeleteButton({ routineId, onDelete }) {
    const handleDelete = async () => {
        if (!window.confirm("루틴을 삭제하시겠습니까?")) return;

        try {
            console.log("Attempting to delete routineId:", routineId);

            // DELETE 요청의 body에 데이터 전달
            const response = await axios.delete(
                'http://localhost:3000/api/routine/delete',
                {
                    data: { routineId }, // DELETE 요청의 body에 routineId 포함
                    withCredentials: true, // 세션 데이터 전송
                }
            );

            if (response.status === 200 && response.data.success) {
                alert("루틴 삭제 완료✔️");
                onDelete(routineId); // 삭제된 루틴을 화면에서 제거
            } else {
                throw new Error(response.data.message || "루틴 삭제 실패🥲");
            }
        } catch (err) {
            console.error("Error during delete:", err);
            alert("루틴 삭제 중 문제가 발생했습니다😫");
        }
    };

    return (
        <button
            className="bg-red-200 text-black font-medium w-10 h-7 rounded-lg"
            onClick={handleDelete}
        >
            삭제
        </button>
    );
}

export default DeleteButton;
