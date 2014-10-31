/** @jsx React.DOM */

jest.dontMock('../components/Home.jsx');
jest.dontMock('../components/ToDo.jsx');
jest.dontMock('../components/Item.jsx');
jest.dontMock('../stores/AppStore.js');

describe('Main App', function() {
  it('has render method', function() {

    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var testApp = TestUtils.renderIntoDocument(<App/>);

    expect(TestUtils.isCompositeComponent(testApp)).toEqual(true);
    expect(testApp.render).toBeDefined();
    var Route = require('react-router').Route;

    console.log('Route incoming:');
    console.log(Route.Link);

    // var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");

    // for (var i = 0; i < items.length; i++) {
    //     console.log(items[i].getDOMNode().textContent);
    // }
  });

  it('should redirect to the project homepage when the user clicks on the logo', function(){

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var Router = require('react-router');

    var logo = TestUtils.findRenderedDOMComponentWithClass(testApp, "navbar-brand");
    TestUtils.Simulate.click(logo.getDOMNode());
    expect(Router.Route).toBe('http://react-fullstack.azurewebsites.net');
  });

  it('should redirect to the signup page', function(){

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var Router = require('react-router');

    var logo = TestUtils.findRenderedDOMComponentWithClass(testApp, "navbar-signup");
    TestUtils.Simulate.click(logo.getDOMNode());
    expect(Router.Route).toBe('/signup');
  });

  it('should redirect to the login page', function(){

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var React = require('react/addons');
    var App = require('../components/Home.jsx');
    var TestUtils = React.addons.TestUtils;

    var Router = require('react-router');

    var logo = TestUtils.findRenderedDOMComponentWithClass(testApp, "navbar-login");
    TestUtils.Simulate.click(logo.getDOMNode());
    expect(Router.Route).toBe('/login');
  });


});