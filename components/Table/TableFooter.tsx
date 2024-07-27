import PaginationComponent from '../Pagination'
import { PaginateType } from '@/types'

const TableFooter = ({ paginationOptions, loading }: { paginationOptions?: PaginateType; loading?: boolean }) => {
  return (
    <tfoot className="bg-darkBlue">
      <tr>
        <td colSpan={100} className="p-4 w-full">
          <div className=" flex text-xs font-thin">
            {paginationOptions && !loading && <PaginationComponent {...paginationOptions} />}
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter
