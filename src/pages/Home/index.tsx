import React from 'react'

import { Standing } from '@f1/shared/models/standing'
import { useWorldChampions } from '@f1/components/hooks/useWorldChampions'
import { HomeTemplate } from '@f1/components/templates/HomeTemplate'

const Home = () => {
  const { records } = useWorldChampions()

  const onItemClicked = React.useCallback((record: Standing) => {
    console.info(record)
  }, [])

  return <HomeTemplate records={records} onItemClicked={onItemClicked} />
}

export { Home }
