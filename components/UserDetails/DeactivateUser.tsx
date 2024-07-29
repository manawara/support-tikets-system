'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import UserWrapper from './UserWrapper'
import { Button } from '../Button'
import Modal from '../Modal'
import { ModalRef } from '@/types'
import { deleteUser } from '@/actions/user'
const DeactivateUser = ({ userId }: { userId: string }) => {
  const modalRef = useRef<ModalRef>(null)
  const router = useRouter()
  const handleOpenModal = () => {
    modalRef.current?.open()
  }
  const handleCloseModal = () => {
    modalRef.current?.close()
  }

  const handleDeleteUser = async (id: string) => {
    await deleteUser(id)
    handleCloseModal()
    router.push('/dashboard/team')
  }
  return (
    <UserWrapper title="Deativate User" description="Permanently delete the user">
      <Button onClick={handleOpenModal}>Deactive user</Button>
      <Modal ref={modalRef} className="p-8  text-gray-50 border border-solid bg-lightBlue backdrop:backdrop-blur">
        <p>Are you sure you want to delete this user?</p>
        <div className="flex mt-4 gap-8">
          <Button onClick={() => handleDeleteUser(userId)}>Yes</Button>
          <Button onClick={handleCloseModal}>No</Button>
        </div>
      </Modal>
    </UserWrapper>
  )
}

export default DeactivateUser
