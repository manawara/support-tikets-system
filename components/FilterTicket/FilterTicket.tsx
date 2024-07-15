import React from 'react'
import Input from '../Input'
import Select from '../Select/Select'
import sortIcon from '@/public/sort_icon.svg'

const FilterTicket = () => {
  return (
    <div className="bg-lightBlue p-8 flex flex-col sm:flex-row justify-between ">
      <div className="max-w-72">
        <Input label="Search ticket" />
      </div>
      <div className="max-w-[140px] sm:min-w-[140px] sm:max-w-[200px] ">
        <Select
          placeholder="Sort by"
          data={[
            { id: 1, name: 'ticket' },
            { id: 2, name: 'date' },
          ]}
          icon={sortIcon}
        />
      </div>
    </div>
  )
}

export default FilterTicket
