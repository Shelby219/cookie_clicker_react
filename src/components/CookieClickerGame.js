import React, {Component} from "react"
import GameScore from "./GameScore"
import AutoIncrementNumber from "./AutoIncrementNumber"
import "../styles/CookieClickerGame.css"



class CookieClickerGame extends Component {
        constructor(props){
            super(props)
            this.state = {
                cookie: 0,
                increaseButton: 0,
                decreaseButton: 0,
                date: new Date()
            }
            this.increase = this.increase.bind(this);
            this.decrease = this.decrease.bind(this);
        }

        increase(){
            this.setState({
                cookie: this.state.cookie + 1,
                increaseButton: this.state.increaseButton + 1
              });
        }
        
        decrease(){
            this.setState({
                cookie: this.state.cookie - 1,
                decreaseButton: this.state.decreaseButton + 1
              });
        }

        tick() {
            this.setState({date: new Date()})
        }

        componentDidMount() {
            console.log("COMPONENT DID MOUNT")
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
            console.log(this.timerID)
          }

          componentWillUnmount() {
            console.log("COMPONENT WILL UNMOUNT")
            clearInterval(this.timerID);
          }
        
        render(){
            const {cookie} = this.state
            return (
                <div>
                    <div className = "container">
                        <div>
                            <img className= "cookie"src="https://www.pngkey.com/png/full/4-44634_cartoon-cookie-png-vector-stock-chocolate-chip-cookie.png"></img>
                            <h1>{cookie}</h1>
                            <div>
                            
                            <button className = "button" onClick={this.increase}>Get Cookie </button>
                            <button className = "button" onClick={this.decrease}>Rid Cookie</button>
                            <div className = "click-tally">Cookie Clicks {this.state.increaseButton}</div>
                            <div className = "click-tally">Cookie Rid Clicks {this.state.decreaseButton}</div>
                            <div className = "timer" >Timer {this.state.date.toLocaleTimeString([], { second: '2-digit' })}</div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }



export default CookieClickerGame