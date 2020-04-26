import React from 'react'
import { useWorldChampions } from '@f1/components/hooks/useWorldChampions'

const Home = () => {
  const { loading, records } = useWorldChampions()
  console.info(records)
  return <div>home Component</div>
}

export { Home }
