import React, { ReactNode } from 'react'
import Card from '@/components/Card'
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-lightBlue h-screen flex justify-center items-center">
      <div>
        <Card>{children}</Card>
      </div>
    </div>
  )
}

export default AuthLayout
