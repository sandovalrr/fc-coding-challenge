import React from 'react'

import { useHistory } from 'react-router-dom'
import { Standing } from '@f1/shared/models/standing'
import { useWorldChampions } from '@f1/components/hooks/useWorldChampions'
import { HomeTemplate } from '@f1/components/templates/HomeTemplate'

const Home = () => {
  const { records, loading } = useWorldChampions()
  const history = useHistory()

  const onItemClicked = React.useCallback(
    ({ season }: Standing) => {
      history.push(`/season/${season}`)
    },
    [history],
  )

  return <HomeTemplate records={records} onItemClicked={onItemClicked} loading={loading} />
}

export { Home }
