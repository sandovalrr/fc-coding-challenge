import React from 'react'

import { useParams } from 'react-router-dom'
import { DetailTemplate } from '@f1/components/templates/DetailTemplate'
import { useRaceList } from '@f1/components/hooks/useRaceList'

const Detail: React.FC<{}> = () => {
  const { season } = useParams()
  const { records, winner, loading } = useRaceList({ season })

  return <DetailTemplate loading={loading} races={records} season={season} winner={winner} />
}

export { Detail }
