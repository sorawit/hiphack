const React = require('react')

class Rating extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.rating || 0,
      displayRating: this.props.rating ||  0
    }
  }
  onMouseOver(rating) {
    if(!this.props.editable) return false
    this.setState({
      displayRating: rating
    })
  }
  onMouseLeave() {
    if(!this.props.editable) return false
    this.setState({
      displayRating: this.state.rating
    })
  }
  onClick(rating) {
    if(!this.props.editable) return false
    this.setState({
      rating: rating
    })
  }
  render() {
    var stars = []
    for(var i=1; i<=5; i++) {
      stars.push(
        <i className={"ion ion-android-star" + (i <= this.state.displayRating ? " highlight":"")}
           onMouseOver={this.onMouseOver.bind(this, i)}
           onClick={this.onClick.bind(this, i)}
           />
      )
    }
    var className = "rating-component" + (this.props.editable ? " editable" : "")
    return (
      <div className={className} onMouseLeave={this.onMouseLeave.bind(this)}>
        { stars }
      </div>
    )
  }
}

module.exports = Rating
