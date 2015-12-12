const React = require('react')
const { Link } = require('react-router')

const UserLinks = require('./user-links')

class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav" ref="header">
        <div className="fullscreen-container">
          <Link className="fl-lt logo" to="/company/dashboard">
            Hiphack
          </Link>
          <div className="fl-lt participants">
            <i className="ion ion-android-person"/>
            <span className="message">
              ในห้องตอนนี้
            </span>
            <ul>
              <li></li>
              <li></li>
            </ul>
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
