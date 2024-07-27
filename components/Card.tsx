import { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-max border border-solid p-2 rounded-lg bg-darkBlue">{children}</div>
}

export default Card
