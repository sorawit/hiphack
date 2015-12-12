const React = require('react')
const { Link } = require('react-router')

class Menubar extends React.Component {
  getHeader() {
    switch(this.props.page) {
      case 'Dashboard': return (
        <h1 className="fl-lt">
          <i className="ion ion-erlenmeyer-flask" />
          ภาพรวม
        </h1>
      )
      case 'Profile': return (
        <h1 className="fl-lt">
          <i className="ion ion-android-person" />
          ข้อมูลผู้สมัคร
        </h1>
      )
      case 'NewInterview': return (
        <h1 className="fl-lt">
          <i className="ion ion-compose" />
          สร้างการสัมภาษณ์ใหม่
        </h1>
      )
      case 'InterviewCalendar': return (
        <h1 className="fl-lt">
          <i className="ion ion-android-calendar" />
          ตารางการสัมภาษณ์
        </h1>
      )
      case 'NewCandidate': return (
        <h1 className="fl-lt">
          <i className="ion ion-android-person-add" />
          เพิ่มผู้สมัคร
        </h1>
      )
    }
  }
  render() {
    return (
      <nav className="menu-nav">
        <div className="container">
          { this.getHeader() }
          <div className="fl-lt spacer"></div>
          <ul className="fl-lt menu">
            <li>
              <Link to="/company/dashboard" className={'button invert round'+(this.props.page=='Dashboard'?' active':'')}>ผู้สมัครทั้งหมด</Link>
            </li>
            <li>
              <Link to="/company/interviews" className="button invert round">ตารางการสัมภาษณ์</Link>
            </li>
            <li>
              <Link to="/company/questions" className="button invert round">คลังโจทย์</Link>
            </li>
          </ul>
          <div className="fl-rt">
            <Link to="/company/new-candidate" className="button new-candidate">
              <i className="ion ion-android-person-add" /> เพิ่มผู้สมัคร
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

module.exports = Menubar
