/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import '../../css/styles.css';
// On peut aussi importer du CSS de la meme facon.

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Zboui:[
      {
        name: "Machine 1",
        isActive: true
      },
      {
        name: "Machine 2",
        isActive: true
      },
      {
        name: "Machine 3",
        isActive: true
        }
      ]
    }
    console.log(this.state);
console.log(this.state.machine);
  }

render() {
  return(
    <div>
    
    {this.state.Zboui.map(machine=>
     <Machine title={machine.name}
       key={machine.key}
         isActive={machine.isActive}/>
    )
  }

<header/>

<footer/>
</div>
    )
  }
}
export default App;
  
  // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.