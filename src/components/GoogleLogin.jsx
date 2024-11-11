export default function GoogleLogin() {
    return (
        <div>
            <button className="flex items-center border rounded-lg border-sky-200 px-5 py-1">
                <img
                    className="w-6 h-6 mr-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/320px-Google_%22G%22_logo.svg.png"
                    alt="Google logo"
                />
                <span className="text-gray-800 text-xl">Google 계정으로 로그인</span>
            </button>
        </div>
    );
}