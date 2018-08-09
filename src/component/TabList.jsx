import React from 'react';

import axios from 'axios';
import 'bulma'


export default class TabList extends React.Component {
    
    state = {
        tabs: []
    }
   

    dUrl = "http://stream.radio-internet.net/status-json.xsl";

    componentDidMount() {
        axios.get(this.dUrl)
            .then(res => {
                const tempTabs = res.data.icestats.source;
              
                var tabs = []
             
                tempTabs.map(tempTab => {
                
                    if (tabs.indexOf(tempTab.genre) === -1) {
                        tabs.push(tempTab.genre)
                     console.log(tabs)
                      
                     
                    }
                });
                this.setState({ tabs });
              
              
                
               
            });
            

 
    }
    

    createTabs = () => {
        let table = []
        for (let index = 1; index < this.state.tabs.length; index++) {
            const element = this.state.tabs[index];
            table.push(<li><a>{element}</a></li>)
           
            
        }
      

        return table;
    }

   
    render() {
        return (
           
        <div class="tabs" >
           
                <ul >
                    <li class="is-active"><a> {this.state.tabs[0]} </a></li>
                    
              {this.createTabs()}
                </ul>
          
           
            </div>
         
        )
        }
}
