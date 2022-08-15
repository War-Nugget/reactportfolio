import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src="images/project1.jpg" className="item-img" alt="Wildlife"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Wildlife Cencus</h5>            
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                  <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src="images/project2.jpg" className="item-img" alt="hotel"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Yikes!!</h5>            
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
           <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src="images/project2.jpg" className="item-img" alt="hotel"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HVAC Estimator</h5>            
                        </div>
                      </div>
                    </a>
                  </div>
                
          </div>
        </div>
      </div>
  </section>
        );
  }
}
