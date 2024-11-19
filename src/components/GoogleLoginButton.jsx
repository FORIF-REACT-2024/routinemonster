import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GoogleLoginButton = () => {
    const clientId = "437640908018-e1ss3qhnrvo9o979v6q6rvn6ar111ego.apps.googleusercontent.com";
    const navigate = useNavigate();
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(res) => {
                    console.log(res);
                    navigate("/SignupComplete");
                }}
                onError={(err) => {
                    console.error(err);
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;

