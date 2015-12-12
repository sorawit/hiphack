const React = require('react')
const { Link } = require('react-router')

class UserLinks extends React.Component {
  fetchUserData() {

  }
  render() {
    return (
      <div className="user-links">
        <div className="company-logo">
          <img src="/static/images/hippo.png" />
        </div>
        <div className="fl-lt">
          นารีรักย์ สมานฉันท์
          <i className="ion ion-ios-arrow-down" />
        </div>
      </div>
    )
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav" ref="header">
        <div className="container">
          <Link className="fl-lt logo" to="/company/dashboard">
            Hiphack
          </Link>
          <div className="fl-lt notification">
            <i className="ion ion-android-notifications"/>
            <span className="message">
              การสัมภาษณ์ครั้งต่อไปใน 3 วัน
            </span>
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
