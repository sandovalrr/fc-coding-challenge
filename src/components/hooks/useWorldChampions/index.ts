import React from 'react'

import { Standing } from '@f1/shared/models/standing'
import { fetchWorldChampions } from '@f1/shared/service'

type Option = {}

const useWorldChampions = ({}: Option = {}) => {
  const [records, setRecords] = React.useState<Standing[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    setLoading(true)
    fetchWorldChampions()
      .then(setRecords)
      .finally(() => setLoading(false))
  }, [setLoading])

  return {
    loading,
    records,
  }
}

export { useWorldChampions }
