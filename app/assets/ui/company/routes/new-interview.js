const React = require('react')
const { Link } = require('react-router')

const Menubar = require('../components/menubar')

class NewInterviewForm extends React.Component {
  render() {
    return (
      <div className="">

      </div>
    )
  }
}

class NewInterview extends React.Component {
  render() {
    return (
      <div className="page-container new-interview">
        <Menubar page="NewInterview" />
        <NewInterviewForm />
      </div>
    )
  }
}

module.exports = NewInterview
