import { LinkButton } from '@/components/Button'
import keyIcon from '@/public/key_icon.svg'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className="absolute top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 max-w-80 w-full">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 justify-center">
          <Image src={keyIcon} alt="Key Icon" width={48} />
          <h1 className="text-5xl ">Auth</h1>
        </div>
        <p className="text-center">Authentication for the ticket system</p>

        <LinkButton href="/auth/login">Sign in</LinkButton>
      </div>
    </div>
  )
}

export default HomePage
