import React from "react";
import template from "./Tabs.jsx";
import $ from 'jquery';
import 'bulma/css/bulma.css'
import ReactDOM from 'react-dom'

var createReactClass = require('create-react-class');
var arrayTab = [];

class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.socket =  props.socket ;
    this.user = props.user ;
    this.logout =  props.logout ;

    const dUrl = "http://stream.radio-internet.net/status-json.xsl";


    $.ajax(
      {
  
        url: dUrl,
        success: function (result) {
          //console.log(result);
          //console.log(result['icestats']['source'])
          var sourceMusic = result['icestats']['source']
  
          $.each(sourceMusic, function (index, value) {
            //console.log(JSON.stringify(index) + ': ' + JSON.stringify(value.genre));
            if (arrayTab.indexOf(value.genre) === -1) {
              arrayTab.push(value.genre)
  
            }
          });
  
        }
      }
    );
   
    this.Hello = createReactClass({
      render: function () {
        var namesList = arrayTab.map(function (name) {
          console.log(name);
          return <li ><a>{name}</a></li>;
        })
  
        return <ul>{namesList}</ul>
  
      }
    });

    ReactDOM.render(
      <this.Hello />,
      document.getElementById('tabs_container')
    );
  }

  render() {
    return template.call(this);
  }
}

export default Tabs;
