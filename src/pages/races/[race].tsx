import Router from 'next/router'
import { useMemo } from 'react'

import InfoLayout from '@/components/InfoLayout'

import dndRaces from '../api/data/5e-SRD-Races.json'
import getInfo from '@/utils/getInfo'

const ClassInfo = () => {
  const router = Router

  const raceInfo = useMemo(() => getInfo(dndRaces, router.query.race), [router])

  return (
    <InfoLayout>
      <h3 className="text-2xl">{raceInfo.name}</h3>
      <h4 className="text-xl">Size - {raceInfo.size}</h4>
      <p>{raceInfo.size_description}</p>
      <h4 className="text-xl">Alignment</h4>
      <p>{raceInfo.alignment}</p>
      <h4 className="text-xl">Language</h4>
      <p>{raceInfo.language_desc}</p>
    </InfoLayout>
  )
}

export default ClassInfo
