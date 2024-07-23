import FormLogin from '@/components/Auth/FormLogin'

const LoginPage = async () => {
  return (
    <div className="p-8 sm:min-w-[500px]">
      <h1 className="mb-4 text-center text-2xl">Support Ticket Login</h1>
      <p className="text-center mb-12 text-sm">Sign in to access your support tickets</p>
      <FormLogin />
    </div>
  )
}

export default LoginPage
