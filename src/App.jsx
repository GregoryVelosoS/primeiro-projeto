import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import Ney from './assets/meninoney.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = false
  return (
    <div className="App">
      {/* <FirstComponent />
      <TemplateExpressions />
      <MyComponent /> */}

      <ComponentORemake />

      <h1>Olha só um texto aqui </h1>

      {/* Css no prorpio modulo   */}
      <OutroComponent />

        {/* css inline */}
      <p style={{color:"blue", padding:"25px", backgroundColor:"red",     fontSize:"40px"}}>
        Este parágrafo é do App.jsx
      </p>

        {/* Css com if ternário */}
      <h3 style={n > 10 ? ({color:"green", backgroundColor:"yellow"}) :({color:"red", backgroundColor:"black"}) } >
         AQUI TEM UM TEXTO COM O PRIMEIRO ESTILO 
      </h3>

      <h3 style={n < 10 ? ({color:"green", backgroundColor:"yellow"}) : ({color:"red", backgroundColor:"black"}) } >
         AQUI TEM UM TEXTO COM O SEGUNDO ESTILO 
      </h3>

        {/* Class diferente de acordo com a verificação */}
       <h2 className={classDiferente ? "red-title" : "normal-title"}>
        TEXTO COM CLASSE DIFERENTE 1
       </h2> 


      {/* Importação pela pasta public */}
      <img src='./cristiano.jpeg' width={900} height={500}></img>

      <img src={Ney} alt="Imagem do menino Ney no auge" width={900} height={600}/>

    </div>
  );
}

export default App;
