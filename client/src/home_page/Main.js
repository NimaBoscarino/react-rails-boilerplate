import React, { Component } from "react";
import axios from "axios";
import GastownTest from "../images/irish-heather-gastown.jpg";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message
        });
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='row title-section'>
          <div className='col'>
            <h1 className='main-title'>Vancouver's Most Happenin' Places</h1>
            <h2 className='sub-title'>Discover where people are right now.</h2>
          </div>
        </div>

        <section className='row area-section d-flex p-2'>
          <div className='card area-card' style={{ width: "18rem" }}>
            <img
              className='card-img-top area-picture'
              src={GastownTest}
              alt='Card image cap'
            />
            <div className='card-body'>
              <div className='row'>
                <div className='col-8'>
                  <h5 className='card-title area-title'>Gastown</h5>
                  <p className='area-wait-time'>
                    Average Wait Time:{" "}
                    <span className='wait-time-average'>35 min</span>
                  </p>
                </div>
                <div className='col-4 busy-score-div float-right'>
                  <p className='busy-score-number'>87</p>
                </div>
              </div>

              <p className='card-text area-description'>
                A trendy food and drink scene includes chic cocktail lounges and
                restaurants serving everything from gourmet sandwiches to local
                seafood.
              </p>
            </div>

            <div className='container small-list-main'>
              <h4 className='current-busy-list-title'>Currently Busy</h4>

              <div className='row'>
                <div className='col-2 small-list-section'>
                  <div className='busy-score-small-div'>
                    <p className='busy-score-small'>87</p>
                  </div>
                </div>
                <div className='col-10'>
                  <div className='area-small'>
                    <p className='small-list-title'>The Red Room</p>
                    <p className='small-list-type'>Restaurant</p>
                  </div>
                  <div className='wait-time-small'>
                    <p className='wait-minute-min'>
                      25<span className='small-min'> mins</span>
                    </p>
                    <p className='wait-minute-small-text'> Est. Wait Time</p>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-2 small-list-section'>
                  <div className='busy-score-small-div'>
                    <p className='busy-score-small'>87</p>
                  </div>
                </div>
                <div className='col-10'>
                  <div className='area-small'>
                    <p className='small-list-title'>The Red Room</p>
                    <p className='small-list-type'>Restaurant</p>
                  </div>
                  <div className='wait-time-small'>
                    <p className='wait-minute-min'>
                      25<span className='small-min'> mins</span>
                    </p>
                    <p className='wait-minute-small-text'> Est. Wait Time</p>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-2 small-list-section'>
                  <div className='busy-score-small-div'>
                    <p className='busy-score-small'>87</p>
                  </div>
                </div>
                <div className='col-10'>
                  <div className='area-small'>
                    <p className='small-list-title'>The Red Room</p>
                    <p className='small-list-type'>Restaurant</p>
                  </div>
                  <div className='wait-time-small'>
                    <p className='wait-minute-min'>
                      25<span className='small-min'> mins</span>
                    </p>
                    <p className='wait-minute-small-text'> Est. Wait Time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-body card-footer-link'>
              <a href='#' className='card-link'>
                See All Gastown
              </a>
            </div>
          </div>
        </section>

        <h1>This is the Main</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.fetchData}>Fetch Data</button>

        <h2>
          <Link to='/areas'>Areas</Link>
        </h2>
      </div>
    );
  }
}

export default Main;
