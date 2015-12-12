const React = require('react')
const { Link } = require('react-router')

const Menubar = require('../components/menubar')

class Calendar extends React.Component {
  componentDidMount() {
    $(React.findDOMNode(this.refs.calendar)).fullCalendar({
      header: {
				right: 'prev,next today',
				center: 'title',
				left: 'month,agendaWeek,agendaDay'
			},
      lang: 'th'
    })
  }
  render() {
    return (
      <div className="container fullcalendar">
        <div ref="calendar"></div>
      </div>
    )
  }
}

class InterviewCalendar extends React.Component {
  render() {
    return (
      <div className="page-container interview-calendar">
        <Menubar page="InterviewCalendar" />
        <Calendar />
      </div>
    )
  }
}

module.exports = InterviewCalendar
