import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
// import { Guitar } from '/imports/api/Guitar.js';
import Carousel from '/imports/web/Homepage/Carousel.jsx';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      // loadMore  : false,
      // page      : false,
      // skip      : 4,
      searchText:'',
      guitarData:[],
      searchFromProps : true,
    }
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange = (event)=>{
    var name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name] : value,
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 guitar-container">
            <Carousel />
          </div>
          
          <div className="col-lg-12">
            <div className="row guitar-container-box">
              {
                this.props.pubHandle ?
                  this.state.searchFromProps ? 
                    this.props.guitarData.map((data, index)=>{
                      return(
                        <div key={index} className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                          <Link to={"/guitarDetails/" + data._id}>
                            <div className="guitar-box">
                              <div className="guitar-img">
                                <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                              </div>
                              <div className="guitar-pricee">
                                <h6 className="guitar-pricee-h6">
                                  Rs. {data.guitarPrice}
                                </h6>
                              </div>
                              <div title={data.status == "unsold" ? "Available for Sell" : "Already Baught"} className={data.status == "unsold" ? "guitarHompageAva" : "guitarHompageNoAva"}></div>
                              <div className="guitar-price">
                                <h6 className="guitar-price-h6">
                                  Rs. {data.guitarPrice}
                                </h6>
                              </div>
                              <div className="guitar-title">
                                <h6 className="guitar-title-h6">
                                  {data.guitarName}
                                </h6>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                    :
                    this.state.guitarData.map((data, index)=>{
                      return(
                        <div key={index} className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mb-3">
                          <Link to={"/guitarDetails/" + data._id}>
                            <div className="guitar-box">
                              <div className="guitar-img">
                                <img src="/images/guitars/demo1.png" alt="" className="img-responsive"/>
                              </div>
                              <div title={data.status == "unsold" ? "Available for Sell" : "Already Baught"} className={data.status == "unsold" ? "guitarHompageAva" : "guitarHompageNoAva"}></div>
                              <div className="guitar-price">
                                <h6 className="guitar-price-h6">
                                  Rs. {data.guitarPrice}
                                </h6>
                              </div>
                              <div className="guitar-title">
                                <h6 className="guitar-title-h6">
                                  {data.guitarName}
                                </h6>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  :
                  <div className="guitar-loader-pre">
                    <div className="guitar-loader"></div>
                  </div>
              }
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withTracker((props)=>{
  // var pubHandle = Meteor.subscribe('guitarpublish');
  // var guitarData = Guitar.find({},{sort:{'createdAt':-1}, limit: 20}).fetch() || [];

  return {
      guitarData       : [],
      pubHandle        : true,
  }
})(Homepage)