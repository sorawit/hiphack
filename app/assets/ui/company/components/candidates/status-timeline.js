const React = require('react')

class StatusTimelineNode extends React.Component {
  onMouseOverNode(event) {
    var $node = $(event.target)
  }
  render() {
    var className = "node " + (this.props.type || "") + (this.props.highlight ? " highlight" : "")
    return (
      <div onMouseOver={this.onMouseOverNode} className={className}>
        <div className="popover">{this.props.display}</div>
        <div className="arrow" />
        <div className="arrow-inner" />
        <div className="dot" />
      </div>
    )
  }
}

class StatusTimeline extends React.Component {
  render() {
    return (
      <div className="status-timeline">
        <StatusTimelineNode step="1" display="เพิ่มในระบบ" type="start" />
        <StatusTimelineNode step="2" display="นัดสัมภาษณ์" />
        <StatusTimelineNode step="3" display="สัมภาษณ์เสร็จสิ้น รอการพิจารณา" />
        <StatusTimelineNode step="4" display="รอการตอบรับจากผู้สมัคร" highlight={true}/>
        <StatusTimelineNode step="5" display="ผู้สมัครยืนยันการเข้าทำงาน" />
        <StatusTimelineNode step="6" display="สิ้นสุดกระบวนการสมัคร" type="goal" />
        <div className="spacer" />
      </div>
    )
  }
}

module.exports = StatusTimeline
