const React = require('react')

const Navbar = require('../components/navbar-interview')

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

module.exports = Page
