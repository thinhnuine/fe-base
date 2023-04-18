import { AppLayout } from '@/common/layouts/app-layout'
import { AppHomeContainer } from '@/containers/app-home'

export default function AppHomePage() {
  return <AppHomeContainer />
}

AppHomePage.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}
