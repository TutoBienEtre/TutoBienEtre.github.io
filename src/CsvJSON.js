
import choses from './data/data.csv';
import React, { Component } from 'react';
import { readRemoteFile } from 'react-papaparse';




export default class ReadRemoteFile extends Component {
  handleClick = () => {
    readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vRXi-TcKwaEYai8I5dCjOKlaMJ7AR7E5TCAq72muzObYC-YDHQahJvuvhGLYl3z0A/pub?gid=191056284&single=true&output=csv', {
      complete: (results) => {
        console.log('Results:', results);
        console.log(results.data[1][0]);
       
        
      },
      
    });
    
  };
 
  render() {
    this.handleClick();
    
    return (<div></div>
      
      );
    }
    
  }
  


export { ReadRemoteFile }
