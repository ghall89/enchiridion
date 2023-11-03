import Link from 'next/link'
import dndClasses from './api/data/5e-SRD-Classes.json'
import dndRaces from './api/data/5e-SRD-Races.json'

import CategoryCard from '@/components/CategoryCard'

const Home = () => {
  return (
    <div className="flex">
      <CategoryCard data={dndClasses} label="Classes" />
      <CategoryCard data={dndRaces} label="Races" />
    </div>
  )
}

export default Home
