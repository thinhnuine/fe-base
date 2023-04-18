import { Button, Checkbox, Form, Input, Typography } from 'antd'
const { Title } = Typography
export const LoginContainer = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  return (
    <>
      <Title className="text-center">Login</Title>
      <Form className="login-form mt-5" size="large" onFinish={onFinish} layout="vertical">
        <Form.Item label="Username">
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot float-right" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button w-full">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </>
  )
}
