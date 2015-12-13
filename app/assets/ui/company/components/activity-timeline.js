const React = require('react')

class ActivityInterview extends React.Component {
  render() {
    return (
      <li>
        <div className="dot" />
        <div className="header">
          <b>เริ่มการสัมภาษณ์</b>
          <span className="date">{this.props.date}</span>
        </div>
        <div className="body">
          <div className="interview">
            <div className="detail">
              <div>ผู้สัมภาษณ์</div>
              <div className="interviewer">
                {this.props.interview.interviewers.map((i) => i.name).join(', ')}
              </div>
            </div>
            <div className="time">
              <i className="ion ion-android-stopwatch" />
              {this.props.interview.time}
            </div>
          </div>
        </div>
      </li>
    )
  }
}

class ActivityStatusChange extends React.Component {
  render() {
    return (
      <li>
        <div className="dot" />
        <div className="header">
          {this.props.recruiter.name}เปลี่ยนสถานะเป็น <b>{this.props.status}</b>
          <span className="date">{this.props.date}</span>
        </div>
      </li>
    )
  }
}

class ActivityAdd extends React.Component {
  render() {
    return (
      <li>
        <div className="dot" />
        <div className="header">
          {this.props.recruiter.name}เพิ่ม <b>{this.props.candidate.name}</b> เข้ามาในระบบ
          <span className="date">{this.props.date}</span>
        </div>
        <div className="body">
          <a className="resume" href={this.props.candidate.resume_url} target="_blank">
            <iframe src={this.props.candidate.resume_url} />
            <div className="mask" />
            <div className="desc">
              เปิดประวัติย่อในแท็บใหม่ <i className="ion ion-android-open" />
            </div>
          </a>
        </div>
      </li>
    )
  }
}

class ActivityTimeline extends React.Component {
  render() {
    var interview = {interviewers: [{name: "แมวน้ำ สำราญรมณ์"}], time: "45 นาที"}
    var recruiter = {name: "มนีรัตน์"}
    return (
      <ul className="activity-timeline">
        <ActivityInterview candidate={this.props.candidate} interview={interview} date="10 พ.ย. 58"/>
        <ActivityStatusChange candidate={this.props.candidate} recruiter={recruiter} status="รอสัมภาษณ์" date="22 ต.ค. 58"/>
        <ActivityAdd candidate={this.props.candidate} recruiter={recruiter} status="รอสัมภาษณ์" date="7 ต.ค. 58"/>
      </ul>
    )
  }
}

module.exports = ActivityTimeline
