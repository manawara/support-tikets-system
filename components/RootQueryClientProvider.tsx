'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const RootQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default RootQueryClientProvider
