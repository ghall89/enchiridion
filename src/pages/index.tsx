import Link from 'next/link'
import dndClasses from './api/data/5e-SRD-Classes.json'

import CategoryCard from '@/components/CategoryCard'

const Home = () => {
  return (
    <div>
      <CategoryCard data={dndClasses} label="Classes" />
    </div>
  )
}

export default Home
