const React = require('react')
const { Link } = require('react-router')

class UserLinks extends React.Component {
  fetchUserData() {

  }
  render() {
    return (
      <div className="user-links">
        <div className="fl-lt">
          นารีรักย์ สมานฉันท์
          <i className="ion ion-ios-arrow-down" />
        </div>
      </div>
    )
  }
}

module.exports = UserLinks
