
//import { Todos } from './Components/todos';
//import { Goals } from './Components/goals';
import  Menu  from './Components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTaskAndGoal from './Components/Form/Form';
import Item from './Components/Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Components/AddMobileButton/AddMobileButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{
  //addTodo,
  initAddTodo
} from './reducers/todoSlice'

import './Components/todos'

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const arr = [
    {
      'name':'Pasear al perro 1'
    },
    {
      'name':'Pasear al perro 2'
    }
  ]
  useEffect(() => {
    arr.forEach((item) => {
      dispatch(initAddTodo(item))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch /* , arr */]);

  return (
    <div className="App">
      <Menu/>
      
      
      { /*<Todos/> }
      { <Goals/> */}

      <Container>
      <Row>
        <Col xs={0} md={0}  className='d-none d-sm-block d-sm-none d-md-block '><FormTaskAndGoal/></Col>
        <Col xs ={0}  sm ={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
              <AddingMobileButton className='float-left'/>
            </div>
          </Row>
          <Row>
            <div className='scrolling'>
              {
                todos.map((todo, index) => {
                  return (
                    <Item key={index} name={todo.name}/>
                  )
                }
                )
              }
          </div>
          </Row>

        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;