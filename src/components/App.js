import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import { fetchsProduct } from '../actions'
import Nav from './Nav'
import Table from './Table'
import history from '../history'
import Home from './Home'
const App = (props) => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id/:index" component={Table} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
const mapStateToProps = state => {
  return {
    product: Object.values(state.product)
  }
}

export default connect(mapStateToProps, { fetchsProduct })(App)