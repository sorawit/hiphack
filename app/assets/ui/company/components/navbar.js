const React = require('react')
const { Link } = require('react-router')

const Translation = require('ui/translation/translation')
const T = new Translation('company.components.navbar')

const UserLinks = require('./user-links')

class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav" ref="header">
        <div className="container">
          <Link className="fl-lt logo" to="/company/dashboard">
            Hiphack
          </Link>
          <div className="fl-lt links">
            <Link className="link active" to="/company/candidates/active">
              {T.get('nav.candidates') /* Candidates */}
            </Link>
            <Link className="link" to="/company/calendar">
              {T.get('nav.calendar') /* Calendar */}
            </Link>
            <Link className="link" to="/company/problem-sets">
              {T.get('nav.problem-sets') /* Problem Sets */}
            </Link>
          </div>
          <div className="fl-rt">
            <UserLinks />
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Navbar
