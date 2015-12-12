const React = require('react')
const { Router, Route } = require('react-router')

const Navbar = require('./components/navbar')

class Page extends React.Component {
  render() {
    return (
      <div className="page-clear">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

module.exports = () => {
  return (
    <Route path="/candidate" component={Page}>
      <Route path="interview" component={require('./routes/interview')} />
    </Route>
  )
}
