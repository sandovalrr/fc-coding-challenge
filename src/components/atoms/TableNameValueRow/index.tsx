import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

type Props = {
  name: React.ReactNode
  value: React.ReactNode
}

const useStyles = makeStyles({})

const TableNameValueRow: React.FC<Props> = ({ name, value }) => {
  const classes = useStyles()
  return (
    <tr>
      <td>{name}:</td>
      <td align="right">{value}</td>
    </tr>
  )
}

export { TableNameValueRow }
