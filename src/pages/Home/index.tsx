import React from 'react'

import { useWorldChampions } from '@f1/components/hooks/useWorldChampions'
import { HomeTemplate } from '@f1/components/templates/HomeTemplate'

const Home = () => {
  const { records } = useWorldChampions()
  return <HomeTemplate records={records} />
}

export { Home }
