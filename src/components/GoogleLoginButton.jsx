import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";



const GoogleLoginButton = () => {
    const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
    const navigate = useNavigate();

    const handleSuccess = async (res) => {
        try {
            const decodedToken = jwtDecode(res.credential); // Google에서 반환된 JWT 토큰 디코드
            const { name, email, picture } = decodedToken; // 사용자 정보 추출
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPicture", picture);

            console.log("유저 정보:", { name, email, picture });

            const response = await axios.post(
                "http://localhost:3000/api/users/signin",
                {
                    credential: res.credential,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            console.log("백엔드로 성공적으로 전송:", res.credential, response);

            // 세션 확인 요청
            const sessionResponse = await axios.get(
                "http://localhost:3000/api/users/session",
                {
                    withCredentials: true, // 세션 쿠키 포함
                }
            );

            console.log("세션 데이터:", sessionResponse.data);

            navigate("/LoginCompletePage", { state: { name, email, picture } });
        } catch (err) {
            console.error("백엔드 전송 오류:", err);
            console.error("에러 디버그 정보:", err.response?.data || "응답 없음");
        }

    };



    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={(err) => {
                    console.error("로그인 실패:", err);
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;

