import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custyleslick.css";
class Slickapislider extends React.Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        ////this.setState({ users: result.data });
        this.setState({ users: result.data.slice(1, 5) });
      });
    });
  }

  render() {
    var settings = {
      dots: true,
      // infinite: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        {/* <h1>slick using api </h1> */}
        <Slider {...settings}>
          {this.state.users
            ? this.state.users.map((item, i) => (
                <div className="">
                  {/* <p>
                    <strong>no:-</strong>
                    {i}
                  </p> */}
                  <p>
                    <img src={item.avatar} alt="pic abc" />
                  </p>
                  {/* <p>
                    <strong>image path: </strong> {item.avatar}
                  </p> */}
                  <p>
                    <strong>Name: </strong>
                    {item.first_name} {item.last_name}
                  </p>

                  {/* <p>
                    <strong>email: </strong>
                    {item.email}
                  </p> */}
                </div>
              ))
            : null}
        </Slider>
      </>
    );
  }
}

export default Slickapislider;
