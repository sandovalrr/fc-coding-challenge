import React from 'react'

import { Home } from '@f1/pages/Home'
import { F1Theme } from '@f1/components/molecules/F1Theme'
import { Layout } from '@f1/components/molecules/Layout'

function App() {
  return (
    <F1Theme>
      <Layout title="F1 world champions">
        <Home />
      </Layout>
    </F1Theme>
  )
}

export { App }
