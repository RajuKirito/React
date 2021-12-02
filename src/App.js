import {useReducer} from  'react';
import {Container} from  'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {TodoContext} from './context/TodoContext';
import todoReducer from './context/reducer'
import TodoForm from './components/TodoForms';
import Todos from './components/Todos';
import logo from './logo.svg';

const App = () =>{
  const[todos, dispatch] = useReducer(todoReducer,[]);
  return (
    <TodoContext.Provider value ={{todos, dispatch}}>
      <Container fluid>
        <img src = {logo} width='100' height='100' className = 'rounded mx-auto d-block'/>
        <h1>TODO app with context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>
    </TodoContext.Provider>
  );
}
export default App;
