import { AuthLayout } from '@/common/layouts/auth-layout'
import { LoginContainer } from '@/containers/login'

export default function LoginPage() {
  return <LoginContainer />
}

LoginPage.getLayout = (page: React.ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}
