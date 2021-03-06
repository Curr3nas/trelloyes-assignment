import React from 'react';
import List from './List';
import './App.css'
function App(props) {
  console.log(props.store.lists[0].cardIds)
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        </header>
      <div className="App-list">
        {props.store.lists.map(x => <List 
        header={x.header}
        cards={x.cardIds.map(id => props.store.allCards[id])}
        ></List>  )}
      </div>
    </main>
  );
}

export default App;