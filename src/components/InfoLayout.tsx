import { FC } from 'react'
import Link from 'next/link'

interface InfoLayoutProps {
  children: React.ReactNode
}

const InfoLayout: FC<InfoLayoutProps> = ({ children }) => (
  <div className="m-3">
    <div className="my-2">
      <Link className="text-orange-600 hover:text-orange-800" href="/">
        ← Back
      </Link>
    </div>
    <hr />
    {children}
  </div>
)

export default InfoLayout
