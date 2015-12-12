const React = require('react')

class Loader extends React.Component {
    render() {
      return (
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
      )
    }
}

module.exports = Loader
