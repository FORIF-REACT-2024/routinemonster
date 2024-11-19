import MakeRoutineButton from "../components/MakeRoutineButton";

export default function SignupCompletePage() {
    return (
        <div className="flex items-center justify-center h-screen bg-cornflower-50">
            <div className="bg-white border-2 border-blue-400 rounded-lg p-6 shadow-md text-center">
                <h1 className="text-3xl font-bold mb-8">가입이 완료되었습니다!</h1>
                <MakeRoutineButton />
            </div>
        </div>
    );
}