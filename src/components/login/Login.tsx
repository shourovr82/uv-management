"use client";

import { Button, Col, Row } from "antd";
import loginImage from "@/Assets/login/loginImage.svg";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onsSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push("/profile");
      }

      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          First Login Your Account{" "}
        </h1>
        <div>
          <Form submitHandler={onsSubmit}>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
