import Router from 'next/router'
import { useMemo } from 'react'

import InfoLayout from '@/components/InfoLayout'

import dndClasses from '../api/data/5e-SRD-Classes.json'
import getInfo from '@/utils/getInfo'

type Proficiency = {
  index: string
  name: String
}

const ClassInfo = () => {
  const router = Router

  const classInfoMemo = useMemo(
    () => getInfo(dndClasses, router.query.class),
    [router],
  )

  return (
    <InfoLayout>
      <h3 className="text-2xl">{classInfoMemo.name}</h3>
      <p>Hit Die: {classInfoMemo.hit_die}</p>
      <h4 className="text-xl">Proficiencies</h4>
      <ul>
        {classInfoMemo.proficiencies.map((prof: Proficiency) => (
          <li key={prof.index}>{prof.name}</li>
        ))}
      </ul>
    </InfoLayout>
  )
}

export default ClassInfo
