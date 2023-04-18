import { AdminLayout } from '@/common/layouts/admin-layout'
import { AdminHomeContainer } from '@/containers/admin-home'

export default function AdminHomePage() {
  return <AdminHomeContainer />
}

AdminHomePage.getLayout = (page: React.ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>
}
