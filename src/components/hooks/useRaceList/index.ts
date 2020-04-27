import React from 'react'

import { Race } from '@f1/shared/models/race'
import { Standing } from '@f1/shared/models/standing'
import { fetchRaceAndWorldChampionBySeason } from '@f1/shared/service'

type Options = {
  season: string
}

const useRaceList = ({ season }: Options) => {
  const [records, setRecords] = React.useState<Race[]>([])
  const [winner, setWinner] = React.useState<Standing>()
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!season) return

    setLoading(true)
    fetchRaceAndWorldChampionBySeason(season)
      .then(([champion, races]) => {
        setWinner(champion)
        setRecords(races)
      })
      .finally(() => setLoading(false))
  }, [season, setWinner, setRecords, setLoading])

  return {
    loading,
    records,
    winner,
  }
}

export { useRaceList }
