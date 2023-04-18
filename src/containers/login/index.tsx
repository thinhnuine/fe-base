import { Button, Checkbox, Form, Input, Typography } from 'antd'
const { Title } = Typography
import { useTranslation } from 'next-i18next'
export const LoginContainer = () => {
  const { t } = useTranslation('auth/login')

  const onFinish = () => {}

  return (
    <>
      <Title className="text-center">{t('heading')}</Title>
      <Form className="login-form mt-5" size="large" onFinish={onFinish} layout="vertical">
        <Form.Item label={t('username')}>
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item label={t('password')}>
          <Input.Password placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>{t('rememberMe')}</Checkbox>
          </Form.Item>

          <a className="login-form-forgot float-right" href="">
            {t('forgotPassword')}
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button w-full">
            {t('login')}
          </Button>
          {t('or')} <a href="">{t('registerNow')}</a>
        </Form.Item>
      </Form>
    </>
  )
}
