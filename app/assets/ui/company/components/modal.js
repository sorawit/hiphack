const React = require('react')
const ReactDOM = require('react-dom')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.id = 'sample-overlay-id' //override this when implement child class
  }
  onModalClick(event) {
    window.x = event
    this.props.onClose()
  }
  onModalInnerClick(event) {
    event.stopPropagation()
  }
  render() {
    var className = "modal" + (this.props.open ? " open" : "")
    return (
      <div ref="modal" className={className} onClick={this.onModalClick.bind(this)}>
        <div className="modal-inner" onClick={this.onModalInnerClick.bind(this)}>
          { this.renderModal() }
        </div>
      </div>
    )
  }
}

module.exports = Modal
