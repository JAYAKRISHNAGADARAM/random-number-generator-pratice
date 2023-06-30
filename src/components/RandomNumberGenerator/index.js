// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onClickButton = () => {
    const randomNumber = Math.ceil(Math.random * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const count = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="main-heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="text">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
