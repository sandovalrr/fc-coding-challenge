import React from 'react'

import Typography from '@material-ui/core/Typography'

type Props = {
  name: React.ReactNode
  value: React.ReactNode
}

const TableNameValueRow: React.FC<Props> = ({ name, value }) => {
  return (
    <tr>
      <td>
        <Typography variant="h5">{name}:</Typography>
      </td>
      <td align="right">
        <Typography variant="h5">{value}</Typography>
      </td>
    </tr>
  )
}

export { TableNameValueRow }
