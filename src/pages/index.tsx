import { AppLayout } from '@/common/components/app-layout'
import { HomeContainer } from '@/containers/home'

export default function HomePage() {
  return <HomeContainer />
}

HomePage.getLayout = (page: React.ReactElement) => {
  return <AppLayout>{page}</AppLayout>
}
