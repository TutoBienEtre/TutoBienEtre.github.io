/* const GSheetReader = require('g-sheets-api');
  

  const options = {
      apiKey: 'AIzaSyCzP1ql7SBKHpBrCjJz8KkrTNGg0p_ZbUg',
      sheetId: '1hdfl1sQyJZ3mDKzjyTt77PpAXxQFRheFFdXRknsHOWc',
      
      //sheetNumber: 1,
       // if sheetName is supplied, this will take precedence over sheetNumber
      returnAllResults: true,
     /* filter: {
        'department': 'archaeology',
        'module description': 'introduction'
      },
      filterOptions: {
        operator: 'or',
        matching: 'loose'
      }
    }


GSheetReader(
  options,
  results => {
    // do something with the results here
  },
  error => {
    // OPTIONAL: handle errors here
  }
  
);*/




/*
//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}
*/



        /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/






/*
$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "./data/data.csv",
      dataType: "text",
      success: function(data) {processData(data);}
   });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');
  var lines = [];

  for (var i=1; i<allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {

          var tarr = [];
          for (var j=0; j<headers.length; j++) {
              tarr.push(headers[j]+":"+data[j]);
          }
          lines.push(tarr);
      }
  }
  // alert(lines);
}
*/





/*
function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

const csv = [
  ["1-1", "1-2", "1-3"],
  ["2-1", "2-2", "2-3"]
]



//var csv is the CSV file with headers
function CsvJSON(csv){
  //*var csv = choses;
  var lines=csv.toString().split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  console.log(csv);
  console.log(choses);
  
  //return result; //JavaScript object
  JSON.stringify(result); //JSON
  console.log(csv[1]);

  var csv = require('./data/data.json');
  console.log(csv);
  //download(result, 'json.txt', 'text/plain');
  return result;
  

}
//export default CsvJSON ;*/




/*
    <div className="App">
     <ReadRemoteFile /> 
     
      <header className="App-header">
      
   

        <h2 className="Titre">
          Affichage des scores en direct !
        </h2>
        <img src={logotuto} className="App-logo"/>
        <h4 className="TitreTableau">Nom de l'équipe</h4>
        <h4 className="ScoresTableau">Points</h4>
        <h4 className="NumeroTableau">N°</h4>
      

        {
          runCallback(() => {
            var i = 1;
            console.log(j.Data[i].POINTS);
            
            const row = [];
            for (var i = 0; i < nombreMax; i++) {
              
              row.push(<p class="rectangleRank">{i + 1}<p class="rectangleName">{j.Data[i].GROUPE}<p class="rectangleScore">{j.Data[i].POINTS}</p></p></p>);
             
              
              
            }
            return row;
             
            
          })
        }

      </header>
    </div>
      
*/





/*----------------------- full app fonctionnel

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './data/data.csv';
import logotuto from './LogoTuto.png'
import React, { Component } from 'react';
import { readRemoteFile } from 'react-papaparse';
//import ReadRemoteFile from "./CsvJSON.js"
 


 let j = require('./data/data.json');
 

const runCallback = (cb) => {
  return cb();
};


 
 class ReadRemoteFile extends Component {
  handleClick = () => {
    readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vRXi-TcKwaEYai8I5dCjOKlaMJ7AR7E5TCAq72muzObYC-YDHQahJvuvhGLYl3z0A/pub?gid=191056284&single=true&output=csv', {
      complete: (results) => {
        console.log('Results:', results);
        console.log(results.data[1][0]);
        const table = ReadRemoteFile;
        
      },
      
    });
    
  };
 
  render() {
    this.handleClick();
    
    return (<div></div>
      
      );
    }
    
  }


function App() {


  const [ Datas, setData ] = useState([]);
  var i = 0;
  const nombreMax = 16;



  

    return (    <div className="App">
    <ReadRemoteFile /> 
    
     <header className="App-header">
     
  

       <h2 className="Titre">
         Affichage des scores en direct !
       </h2>
       <img src={logotuto} className="App-logo"/>
       <h4 className="TitreTableau">Nom de l'équipe</h4>
       <h4 className="ScoresTableau">Points</h4>
       <h4 className="NumeroTableau">N°</h4>
     

       {
         runCallback(() => {
           var i = 1;
           console.log(j.Data[i].POINTS);
           
           const row = [];
           for (var i = 0; i < nombreMax; i++) {
             
             row.push(<p class="rectangleRank">{i + 1}<p class="rectangleName">{j.Data[i].GROUPE}<p class="rectangleScore">{j.Data[i].POINTS}</p></p></p>);
            
             
             
           }
           return row;
            
           
         })
       }

     </header>
   </div>);

};



export default App ;


----------------------------------------------*/