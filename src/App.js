import { FormControl, Button, InputLabel, Input } from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import { db } from './firebase';
// use the firebase itself for operations on the remote firebase instance
import firebase from './firebase';


function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('')

  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput('')
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log('this is the snapshot size: ' + snapshot.size);
      if(!snapshot.size) {
        setTodos([]);
      } else {
        setTodos(snapshot.docs.map(doc => ({
          id: doc.id,
          item: doc.data()
        })
        ))
      }
    })
  }, [input])

  return (
    <div className="app">
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
      </form>
      {!todos.length && 'Nothing to do'}

      <ul>
        {todos.map((it) => <Todo key={it.id} arr={it} />)}
      </ul>
      
      
      <ul>
        {/* you could have also done accomplished the same using the code below instead */}
        {/* {todos.map( (obj) => <li>{obj.todo}</li> )} */}
        {/* or */}
        {/* {todos.map( (it) => <li>{it.id}  {it.item.todo}</li> )} */}
      </ul>
    </div>
  );
}

export default App;
