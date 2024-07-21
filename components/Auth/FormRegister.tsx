'use client'
import React, { useTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import * as z from 'zod'
import { createUser } from '@/actions/register'
import Input from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'
import { RegisterSchema } from '@/schemas'
import { ErrorMessage } from '@hookform/error-message'

const FormRegister = () => {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      createUser(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success || 'Registration successful!')
          reset()
        })
        .catch((err) => {
          console.error('Submission error:', err)
          setError('An unexpected error occurred')
        })
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          isExpended
          placeholder="Your first name"
          label="First Name"
          type="text"
          {...register('firstName')}
          disabled={pending}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="firstName" />
        </div>
      </div>
      <div>
        <Input
          isExpended
          placeholder="Your last name"
          label="Last Name"
          type="text"
          {...register('lastName')}
          disabled={pending}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="lastName" />
        </div>
      </div>

      <div>
        <Input
          isExpended
          placeholder="login@example.com"
          label="Email"
          type="email"
          {...register('email')}
          disabled={pending}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div>
        <Input isExpended label="Password" type="password" {...register('password')} disabled={pending} />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="password" />
        </div>
      </div>
      {error && <div className="my-4 flex justify-center">{error}</div>}
      {success && <div className="my-4 flex justify-center">{success}</div>}
      <div className="w-1/2 mx-auto mt-2">
        <Button disabled={pending}>Register</Button>
      </div>
      <div className="mt-4 text-sm flex justify-center">
        Already have an account?{' '}
        <Link href="/login" className="ml-2 font-semibold">
          Sign in
        </Link>
      </div>
    </form>
  )
}

export default FormRegister
