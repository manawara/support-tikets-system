import Sidebar from '@/components/Sidebar/Sidebar'
import HamburgerProvider from '@/context/ContextHamburger'
const DashboardLayout = () => {
  return (
    <main>
      <HamburgerProvider>
        <Sidebar />
      </HamburgerProvider>
    </main>
  )
}

export default DashboardLayout
