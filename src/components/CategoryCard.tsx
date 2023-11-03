import { FC } from 'react'
import Link from 'next/link'

type Categories = {
  index: string
  name: string
}

interface CategoryCardProps {
  data: Array<Categories>
  label: string
}

const CategoryCard: FC<CategoryCardProps> = ({ data, label }) => (
  <div className="p-4 m-4 w-60 rounded-md bg-white border-solid border-2 shadow-md text-center">
    <h2 className="text-4xl">{label}</h2>
    <hr />
    <ul>
      {data.map((item) => (
        <li
          key={item.index}
          className="text-blue-700 hover:text-blue-600 hover:underline"
        >
          <Link href={`./${label.toLowerCase()}/${item.index}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default CategoryCard
