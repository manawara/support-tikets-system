import { auth } from '@/auth'
import Card from '@/components/Card'
import Spinner from '@/components/Spinner'
import React from 'react'
import { verificationAccount } from '@/data'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

type SearchParamsType = {
  searchParams: { token?: string }
}
const VerificationPage = async (searchParams: SearchParamsType) => {
  const token = searchParams

  if (!token.searchParams.token) return redirect('/')
  const existingToken = await verificationAccount(token.searchParams.token)
  try {
  } catch (err) {}
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto flex items-center h-screen">
      <Card>
        <div className="p-4 flex flex-col items-center">
          <h1 className="text-center text-3xl font-semibold mb-2">Verify Your Email</h1>
          <p className="text-center mb-2">Account activation in progress...</p>

          {!existingToken.error && !existingToken.success && <Spinner size="xl" />}
          {existingToken.error && <div className="text-red-600">{existingToken.error}</div>}
          {existingToken.success && <div className="text-green-500">{existingToken.success}</div>}

          <p className="mt-4 text-xs">If you did not request this verification, please contact support .</p>
          <Link className="mt-4 hover:text-gray-300" href="/auth/login">
            Go back to login
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default VerificationPage
