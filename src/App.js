import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Form from './Components/Form/Form';
import Row from 'react-bootstrap/esm/Row';





function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
        <Col><Form></Form></Col>
        <Col>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Col>
      </Row>
      </Container>
     
    </div>
  );
}

export default App;
