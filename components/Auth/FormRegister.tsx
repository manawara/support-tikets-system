'use client'
import React, { useTransition, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import * as z from 'zod'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
import { createUser } from '@/actions/register'
import Input from '@/components/Input'
import { Button } from '../Button'
import { RegisterSchema } from '@/schemas'
import confirmIcon from '@/public/confrim_icon.svg'

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
          isExpanded
          placeholder="Your first name"
          label="First Name"
          type="text"
          {...register('firstName')}
          disabled={pending ? true : false}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="firstName" />
        </div>
      </div>
      <div>
        <Input
          isExpanded
          placeholder="Your last name"
          label="Last Name"
          type="text"
          {...register('lastName')}
          disabled={pending ? true : false}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="lastName" />
        </div>
      </div>

      <div>
        <Input
          isExpanded
          placeholder="login@example.com"
          label="Email"
          type="email"
          {...register('email')}
          disabled={pending ? true : false}
        />
        <div className="text-red-500 text-xs ">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div>
        <Input isExpanded label="Password" type="password" {...register('password')} disabled={pending} />
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
            <Image src={confirmIcon} alt="confirm icon" width={22} /> {success}
          </span>
        </div>
      )}
      <div className="w-1/2 mx-auto mt-2">
        <Button disabled={pending ? true : false}>Register</Button>
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
