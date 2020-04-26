import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from '@f1/pages/Home'
import { Detail } from '@f1/pages/Detail'
import { F1Theme } from '@f1/components/molecules/F1Theme'
import { Layout } from '@f1/components/molecules/Layout'

function App() {
  return (
    <F1Theme>
      <Router>
        <Switch>
          <Route path="/season/:season">
            <Layout title="F1 world champions" showBackButton={true}>
              <Detail />
            </Layout>
          </Route>
          <Route path="/home">
            <Layout title="F1 world champions">
              <Home />
            </Layout>
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </F1Theme>
  )
}

export { App }
