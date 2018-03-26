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

export default function App() {
  return (
    <div>
    <Header/>
      <Machine number="1"
      isActive="yes"/>
      <Machine number="2"
      isActive="no"/>
      <Machine number="3"
      isActive="yes"/>
      <Footer/>
    </div>
  
    
  );
}
  // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.