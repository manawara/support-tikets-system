'use client'
import React, { useTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import * as z from 'zod'
import Input from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'
import { LoginSchema } from '@/schemas'
import { ErrorMessage } from '@hookform/error-message'
import confirmIcon from '@/public/confrim_icon.svg'
import Image from 'next/image'
import loginUser from '@/actions/login'
const FormLogin = () => {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      loginUser(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error)
          } else if (data?.success) {
            setSuccess(data.success)
            reset() // Reset only on success
          }
        })
        .catch((err) => {
          setError('An unexpected error occurred')
        })
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          isExpended
          placeholder="login@example.com"
          label="Email"
          type="email"
          {...register('email', { required: true })}
          disabled={pending ? true : false}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div>
        <Input
          isExpended
          label="Password"
          type="password"
          placeholder="********"
          {...register('password', { required: true })}
          disabled={pending}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="password" />
        </div>
      </div>
      {error && (
        <div className="my-4 flex justify-center">
          <span className="text-red-500  text-shadow-white  px-4 py-2 flex items-center gap-4 text-sm">{error}</span>
        </div>
      )}
      {success && (
        <div className="my-4 flex justify-center">
          <span className="text-green-500  text-shadow-white  px-4 py-2 flex items-center gap-4 text-sm">
            {success}
          </span>
        </div>
      )}
      <div className="w-1/2 mx-auto mt-4 ">
        <Button disabled={pending ? true : false}>{pending ? 'Logging' : 'Login'}</Button>
      </div>
      <div className="mt-4 text-sm flex justify-center">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="ml-2 font-semibold">
          Register
        </Link>
      </div>
    </form>
  )
}

export default FormLogin
