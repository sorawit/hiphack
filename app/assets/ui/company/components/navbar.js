const React = require('react')
const { Link } = require('react-router')

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
            <Link className="link active" to="/company/candidates">
              ผู้สมัครทั้งหมด
            </Link>
            <Link className="link" to="/company/candidates">
              ตารางการสัมภาษณ์
            </Link>
            <Link className="link" to="/company/candidates">
              คลังโจทย์
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
