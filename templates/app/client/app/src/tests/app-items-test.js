/** @jsx React.DOM */

jest.dontMock('../components/Home.jsx');
jest.dontMock('../components/ToDo.jsx');
jest.dontMock('../components/Item.jsx');

jest.dontMock('../stores/AppStore');
jest.dontMock('../actions/AppActions');
jest.dontMock('../dispatchers/AppDispatcher');
jest.dontMock('../constants/AppConstants');
jest.dontMock('react/lib/merge');


describe('Main App Items', function() {

  var React = require('react/addons');
  var App = require('../components/Home.jsx');
  var TestUtils = React.addons.TestUtils;

  it('can add new item', function() {

    var testApp = TestUtils.renderIntoDocument(<App/>);
    var input = TestUtils.findRenderedDOMComponentWithClass(testApp, "form-control");
    var button = TestUtils.findRenderedDOMComponentWithClass(testApp, "btn");

    input.getDOMNode().value = "Test";
    TestUtils.Simulate.click(button.getDOMNode());
    expect(input.getDOMNode().value).toEqual('');
    input.getDOMNode().value = "Item";
    TestUtils.Simulate.click(button.getDOMNode());
    input.getDOMNode().value = "Another item";
    TestUtils.Simulate.click(button.getDOMNode());
    input.getDOMNode().value = "Yet another item";
    TestUtils.Simulate.click(button.getDOMNode());
 
  });

  it('adds item to the list', function(){
    var testApp = TestUtils.renderIntoDocument(<App/>);
    var input = TestUtils.findRenderedDOMComponentWithClass(testApp, "form-control");
    var button = TestUtils.findRenderedDOMComponentWithClass(testApp, "btn");
    var list = TestUtils.findRenderedDOMComponentWithClass(testApp, "list-group");

    input.getDOMNode().value = "Yet another fucking item";
    TestUtils.Simulate.click(button.getDOMNode());
    
    var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");
    expect(items.length).toEqual(4);

  });

    it('should have five things', function(){
    var testApp = TestUtils.renderIntoDocument(<App/>);
    var input = TestUtils.findRenderedDOMComponentWithClass(testApp, "form-control");
    var button = TestUtils.findRenderedDOMComponentWithClass(testApp, "btn");
    var list = TestUtils.findRenderedDOMComponentWithClass(testApp, "list-group");
    
    var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");
    expect(items.length).toEqual(5);

  });

  it('should delete items from the list', function(){
    var testApp = TestUtils.renderIntoDocument(<App/>);
    var closeButton = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "close");
    TestUtils.Simulate.click(closeButton[0].getDOMNode());

    var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");
    expect(4).toEqual(4);
  });

  it('should have deleted that item from before', function(){
    var testApp = TestUtils.renderIntoDocument(<App/>);
    var items = TestUtils.scryRenderedDOMComponentsWithClass(testApp, "list-group-item");
    expect(items.length).toEqual(4);
  });

});