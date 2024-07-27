import Image from 'next/image'
import arrowLeft from '@/public/left_arrow_icon.svg'
import arrowRight from '@/public/right_arrow_icon.svg'
import { PaginateType } from '@/types'

const PaginationComponent = (props: PaginateType) => {
  const { currentPage, startCount, endCount, totalCount, totalPages, onPrev, onNext } = props
  return (
    <>
      <div className="flex items-center">
        {currentPage !== 1 && (
          <button className="flex items-center justify-center px-3 h-8 hover:scale-110" onClick={onPrev}>
            <Image src={arrowLeft} width={14} alt="left icon pagination" />
          </button>
        )}
        <span className="text-xs text-gray-700 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">{startCount}</span> -{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{endCount}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{totalCount}</span>
        </span>

        {currentPage !== totalPages && (
          <button className="flex items-center justify-center  px-3 h-8" onClick={onNext}>
            <Image src={arrowRight} width={14} alt="right icon pagination" />
          </button>
        )}
      </div>
    </>
  )
}

export default PaginationComponent
