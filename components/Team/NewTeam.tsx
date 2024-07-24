'use client'
import { useState, useRef, useEffect, useTransition } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../Button'
import Input from '../Input'
import { addNewTeam } from '@/actions/team'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { schemaTeam } from '@/app/dashboard/team/schemaTeam'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
const NewTeam = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState({
    error: '',
    success: '',
  })
  const [pending, startTransition] = useTransition()

  const modalRef = useRef<HTMLDivElement>(null)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schemaTeam>>({
    resolver: zodResolver(schemaTeam),
    defaultValues: {
      name: '',
    },
  })

  const handleOpenModal = () => {
    setOpen((prev) => !prev)
    setMessage({
      error: '',
      success: '',
    })
  }
  const handleInputChange = () => {
    setMessage({ error: '', success: '' })
  }
  const onSubmit = (values: z.infer<typeof schemaTeam>) => {
    setMessage({ error: '', success: '' })
    startTransition(() => {
      addNewTeam(values)
        .then((data) => {
          if (data?.error) {
            setMessage({
              error: data.error,
              success: '',
            })
            reset()
          } else if (data?.success) {
            setMessage({
              error: '',
              success: data.success,
            })
          }
        })
        .catch((err) =>
          setMessage({
            error: 'An unexpected error occurred',
            success: '',
          })
        )
    })
  }

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative top-0 right-0">
      <Button onClick={handleOpenModal}>New team</Button>
      {open && (
        <div className="absolute right-0 mt-4 z-10" ref={modalRef}>
          <div className="relative bg-darkBlue border rounded-md py-4 px-6">
            <div className="absolute -top-2 right-4 w-4 h-4 bg-darkBlue border-t border-l rotate-45"></div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
              <span className="text-center">Add new team</span>
              <div className="w-40">
                <Input placeholder="Name team" isExpanded {...register('name', { onChange: handleInputChange })} />
              </div>
              <Button>{pending ? 'Sending' : 'Send'}</Button>
            </form>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-xs text-center"
              >
                {message.success && <span className="text-green-500">{message.success}</span>}
                {message.error && <span className="text-red-500">{message.error}</span>}
                <div className="text-red-500 text-xs ">
                  <ErrorMessage errors={errors} name="name" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewTeam
