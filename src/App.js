import './App.css';
import logotuto from './LogoTuto.png'
import React, { useEffect, useState }  from 'react';
import { readRemoteFile } from 'react-papaparse';
import bg from './bg.jpg';

 

const {createServer} = require('http')

const server = createServer(() => {})

server.listen(3000)






function App() {


  const [ rows, setRows ] = useState([]);



  

  useEffect(() => {
   
    readRemoteFile('https://docs.google.com/spreadsheets/d/e/2PACX-1vRXi-TcKwaEYai8I5dCjOKlaMJ7AR7E5TCAq72muzObYC-YDHQahJvuvhGLYl3z0A/pub?gid=191056284&single=true&output=csv', {
      complete: (results) => {
      const temp = [];
      const nombreMax = results.data.length;
      temp.push(
        <div>
          <p>{results.data[0][0]}</p>
          <div class="containerRow">
             <p className="NumeroTableau">N°</p>
             <p className="TitreTableau">Nom de l'équipe</p>
             <p className="ScoresTableau">Points</p>
           </div>
         </div>
        );



      for (var i = 1; i < nombreMax; i++) {

        temp.push(
          <div class="containerRow">
            <p class="rectangleRank">{i}</p>
            <p class="rectangleName">{results.data[i][0]}</p>
            <p class="rectangleScore">{results.data[i][1]}</p>
          </div> 
          
        );

      }

       setRows(temp);
      }, 
    });
  }, []);


  return (   
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <img src={logotuto} className="App-logo"/>
      <h1 className="Titre">Affichage des scores en direct !</h1>
      <div className="containerColumn">
        {rows}
      </div>
      <a className= 'credits' href="https://fr.freepik.com/vecteurs/fond" style={{color:'#FFFFFF'}}>Fond vecteur créé par coolvector - fr.freepik.com</a>
     
   </div>
  );
};

export default App ;



