import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  onLeftArrow = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onRightArrow = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[currentIndex]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-image" />
        <div className="arrow-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="name">{username}</p>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
