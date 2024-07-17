'use client'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import sendIcon from '@/public/send.svg'
import Image from 'next/image'

const RichText = () => {
  const [convertedText, setConvertedText] = useState('Some default content')

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  }

  return (
    <div>
      <div className="flex flex-col relative min-h-[300px]">
        <ReactQuill
          theme="snow"
          value={convertedText}
          onChange={setConvertedText}
          modules={modules}
          style={{ height: '200px' }}
        />
      </div>
      <button className="relative w-4 h-4 hover:scale-110">
        <Image src={sendIcon} fill alt="send icon" />
      </button>
    </div>
  )
}

export default RichText
