/*
 ** Hiphack main route file
 */

// Initilize Route Handlers
const React = require('react')
const { Router, Route, Redirect } = require('react-router')
const createBrowserHistory = require('history/lib/createBrowserHistory')

const RouteNotFound = (
  <Redirect from="*" to="/company/dashboard"/>
)

React.render(
  React.createElement(
    Router,
    { history: createBrowserHistory() },
    require('./company/route')(),
    require('./candidate/route')(),
    RouteNotFound
  )
, document.body)
