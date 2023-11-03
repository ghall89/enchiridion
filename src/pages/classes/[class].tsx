import Router from 'next/router'
import Link from 'next/link'
import { useMemo } from 'react'
import dndClasses from '../api/data/5e-SRD-Classes.json'

const ClassInfo = () => {
  const router = Router

  const classInfoMemo = useMemo(() => {
    const infoIndex = dndClasses.findIndex(
      (dndClass) => dndClass.index === router.query.class,
    )
    console.log(dndClasses[infoIndex])
    return dndClasses[infoIndex]
  }, [router])

  return (
    <div className="m-3">
      <div className="my-2">
        <Link className="text-orange-600 hover:text-orange-800" href="/">
          ← Back
        </Link>
      </div>
      <hr />
      <h3 className="text-2xl">{classInfoMemo.name}</h3>
      <p>Hit Die: {classInfoMemo.hit_die}</p>
      <h4 className="text-xl">Proficiencies</h4>
      <ul>
        {classInfoMemo.proficiencies.map((prof) => (
          <li key={prof.index}>{prof.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ClassInfo
