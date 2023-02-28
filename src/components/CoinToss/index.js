// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {Head: 0, Tail: 0, Total: 0, random: 0}

  change = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({Total: prevState.Total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({Head: prevState.Head + 1}))
    } else if (tossResult === 1) {
      this.setState(prevState => ({Tail: prevState.Tail + 1}))
    }
    this.setState({random: tossResult})
  }

  render() {
    const {Head, Tail, Total, random} = this.state

    return (
      <div className="a">
        <div className="c">
          <h1 className="b">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {random === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.change}>
            Toss Coin
          </button>
          <ul className="div2">
            <li className="p">
              <p>Total:{Total}</p>
            </li>
            <li className="p">
              <p>Heads:{Head}</p>
            </li>
            <li className="p">
              <p>Tails:{Tail}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
