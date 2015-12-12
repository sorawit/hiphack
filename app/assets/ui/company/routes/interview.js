const React = require('react')
const { Link } = require('react-router')

const Ace = require('brace')
const Firebase = require('firebase')
const Firepad = require('firepad')
require('brace/mode/javascript')
require('brace/theme/tomorrow_night_bright')

class CodingEnvironment extends React.Component {
  componentDidMount() {
    var editor = Ace.edit('editor')
    editor.getSession().setMode('ace/mode/javascript')
    editor.setTheme('ace/theme/tomorrow_night_bright')
  }
  render() {
    return (
      <div className="coding-env">
        <div className="spacer" />
        <div className="editor" id="editor" style={{height: '100%', width: '100%'}}>

        </div>
        <div className="controls">
          <div className="fl-lt lang-selector">
            <select>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
              <option value="javascript">JavaScript - ES 5</option>
              <option value="python">Python</option>
              <option value="python3">Python 3</option>
              <option value="go">Go</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option>
            </select>
            <i className="ion ion-ios-arrow-down" />
          </div>
          <button className="button button-run fl-rt">
            <i className="ion ion-play" />
            Run
          </button>
        </div>
      </div>
    )
  }
}

class Question extends React.Component {
  render() {
      return (
        <div className="question">
          <h3>โจทย์</h3>
          <p>เขียนฟังก์ชั่น reverseWords ที่รับ string ที่มีคำหลายคำคั่นด้วยช่องว่าง และ return string ที่กลับลำดับของคำจากหลังไปหน้า (โดยใช้ memory คงที่)</p>
          <h3>ตัวอย่างข้อมูลนำเข้า</h3>
          <p>“this is a bird”</p>
          <h3>ตัวอย่างข้อมูลที่ส่งกลับ</h3>
          <p>“bird a is this”</p>
        </div>
      )
  }
}

class Interview extends React.Component {
  render() {
    return (
      <div className="page-container full">
        <div className="coding-interview">
          <CodingEnvironment />
          <Question />
        </div>
      </div>
    )
  }
}

module.exports = Interview
