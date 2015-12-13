const React = require('react')
const Modal = require('./Modal')

class AddCandidateModal extends Modal {
  renderModal() {
    return (
      <div className="form">
        <h1>เพิ่มผู้สมัครใหม่</h1>
        <div className="input-group">
          <input type="text"/>
          <label>ชื่อผู้สมัคร</label>
        </div>
        <div className="input-group">
          <input type="text"/>
          <label>ตำแหน่งที่สมัคร</label>
        </div>
        <div className="input-group">
          <input type="file"/>
          <label>RESUME</label>
        </div>
        <div className="button large blue">
          เพิ่มผู้สมัคร
        </div>
      </div>
    )
  }
}

module.exports = AddCandidateModal
