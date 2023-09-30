import LoginPage from "@/components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RMS | Login",
};

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
