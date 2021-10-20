
import React from 'react';
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";

import TaskList from "./components/TaskList";
import AddNewTask from "./components/AddNewTask";
import './App.css';

function App() {

  const tasks = useSelector(state => state);
  return (
    <Container className="main-app-container">
      <Row className="mb-4">
        <Col className="mt-4">
          <AddNewTask />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h4>Task List</h4>
        </Col>
        <Col>
          <TaskList tasks={tasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
