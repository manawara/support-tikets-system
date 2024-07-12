import React from 'react'

const TableFooter = () => {
  return (
    <tfoot className="bg-darkBlue">
      <tr>
        <td colSpan={100} className="p-4 w-full">
          <div className="text-xs font-thin">1-20 of 100</div>
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter
