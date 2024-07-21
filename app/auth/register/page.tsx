import FormRegister from '@/components/Auth/FormRegister'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className="p-4 sm:p-8 sm:min-w-[500px] sm:max-w-[500px]">
      <h1 className="mb-4 text-center text-2xl">Sign Up</h1>
      <p className="text-center mb-12 text-sm">Create an account to access your support tickets.</p>
      <FormRegister />
    </div>
  )
}

export default RegisterPage
