import Header from '@/components/Header/Header'
import RootQueryClientProvider from '@/components/RootQueryClientProvider'
import Sidebar from '@/components/Sidebar/Sidebar'
import HamburgerProvider from '@/context/ContextHamburger'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootQueryClientProvider>
      <main>
        <HamburgerProvider>
          <Header />
          <Sidebar />
          <div className="mt-20 min-[500px]:ml-[64px]">{children}</div>
        </HamburgerProvider>
      </main>
    </RootQueryClientProvider>
  )
}

export default DashboardLayout
