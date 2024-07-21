import { Button } from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className="p-8 sm:min-w-[500px]">
      <h1 className="mb-4 text-center text-2xl">Support Ticket Login</h1>
      <p className="text-center mb-12 text-sm">Sign in to access your support tickets</p>
      <form>
        <Input isExpended placeholder="login@example.com" label="Email" type="email" />
        <Input isExpended label="Password" type="password" />
        <div className="w-1/2 mx-auto">
          <Button>Login</Button>
          <Link href="/register" className="flex justify-center mt-4 text-sm">
            Don&apos;t have an account?
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
