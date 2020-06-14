import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home, DetailTask, EditTask, AddTask, FavoriteTask } from './components';
import './App.css'

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/add-task">Add Task</Link>
        <Link className="link" to="/favorite">Task Favorite</Link>
      </nav>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail/:id" component={DetailTask} exact />
        <Route path="/edit/:id" component={EditTask} exact />
        <Route path="/add-task" component={AddTask} exact />
        <Route path="/favorite" component={FavoriteTask} exact />
      </Switch>
    </Router>
  );
}
