import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Roles } from 'meteor/alanning:roles';

// ******************************** Import Other Component ******************************
import Header from '/imports/web/Common/Header.jsx';
import Footer from '/imports/web/Common/Footer.jsx';
import Forbidden from '/imports/web/Common/Forbidden.jsx';
import Homepage from '/imports/web/Homepage/Homepage.jsx';
// ******************************* Component To Render Start ****************************
class Website extends React.Component{
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

// ************************************ Add Routes **************************************
Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
        <Route path="/" component={Website}>
            <IndexRoute component = {Homepage} />
            {/* <Route path='/about' component = {AboutUs} /> */}
        </Route>
        <Route path="/forbidden" component = {Forbidden} />
    </Router>
    , document.getElementById('render-target'));
});