const React = require('react')
const { Link } = require('react-router')

const Menubar = require('../components/menubar')

class NewCandidateForm extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="simple-form">
          <h1>ข้อมูลของผู้สมัคร</h1>
          <label>
            ชื่อ-สกุล
            <input type="text" name="name" />
          </label>
          <label>
            ตำแหน่งที่สมัคร
            <input type="text" name="name" />
          </label>
          <label>
            อีเมล
            <input type="email" name="name" />
          </label>
          <button type="button" className="button">
            บันทึก
          </button>
        </form>
      </div>
    )
  }
}

class NewCandidate extends React.Component {
  render() {
    return (
      <div className="page-container new-candidate">
        <Menubar page="NewCandidate" />
        <NewCandidateForm />
      </div>
    )
  }
}

module.exports = NewCandidate
