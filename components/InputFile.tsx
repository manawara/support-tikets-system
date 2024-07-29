'use client'
import Image from 'next/image'
import { ChangeEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { InputFileType } from '@/types'
import avatarImage from '@/public/avatar_placeholder.png'

const InputFile = ({ placeholder, type, name, value }: InputFileType) => {
  const [file, setFile] = useState(value ?? avatarImage)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileTarget = e.target.files?.[0]

    let reader = new FileReader()
    if (fileTarget) {
      reader.onloadend = () => {
        setFile(reader.result as string)
      }
      reader.readAsDataURL(fileTarget)
    }
  }

  const handleClickFile = () => {
    inputRef.current?.click()
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm">
      <input ref={inputRef} type={type} name={name} hidden accept="image/png, image/jpeg" onChange={handleFileChange} />

      {placeholder && placeholder}
      <div className="flex gap-4 items-center">
        <div className="relative size-20 ">
          <Image src={file} alt="avatar" fill className="rounded-full object-cover" />
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer border border-solid px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleClickFile}
        >
          Choose file
        </motion.button>
      </div>
    </motion.div>
  )
}

export default InputFile
