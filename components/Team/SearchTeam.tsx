'use client'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Card from '../Card'
import Input from '../Input'
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '@/data/team'
import { useOutsideClick } from '@/hook/useOutsideClick'

const SearchTeam = () => {
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  useOutsideClick(inputRef, () => setSearch(''))
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 80)

    return () => clearTimeout(timer)
  }, [search])

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const { data: searched } = useQuery({
    queryKey: ['searchUser', debouncedSearch],
    queryFn: () => getAllUsers({ query: debouncedSearch, page: 1, pageSize: 5 }),
    enabled: debouncedSearch.length > 0,
  })

  return (
    <div className="w-full max-w-[320px] sm:max-w-72 flex flex-col relative">
      <Input label="Search person" onChange={handleChangeSearch} name="search" value={search} ref={inputRef} />
      <div>
        <ul className="text-xs absolute">
          <AnimatePresence>
            {debouncedSearch && searched && searched.users.length > 0 && (
              <Card>
                {searched.users.map((user) => (
                  <li key={user.uid} className="w-[200px] ">
                    <Link
                      href={`/dashboard/team/${user.uid}`}
                      className="flex justify-between w-full h-full py-2 px-4 hover:bg-midnightBlue"
                    >
                      <span>ID: {user.uid}</span>
                      <span>{user.name}</span>
                    </Link>
                  </li>
                ))}
              </Card>
            )}

            {debouncedSearch && searched && searched.users.length === 0 && (
              <li className="text-red-500">Not found users</li>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}

export default SearchTeam
