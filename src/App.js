import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import BlogForm from './components/BlogFrom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import CreatPage from './pages/CreatePage'
import ListPage from './pages/ListPage';

function App() {
  return (
    <Router>

      <NavBar />
      <div className="container">
        <Switch>

          <Route path="/" exact>
            Home Page
          </Route>

          <Route path="/blogs" exact>
            <BlogForm />
          </Route>

          <Route path="/blogs/create" exact>
            create
          </Route>

          <Route path="/blogs/edit" exact>
            edit
          </Route>

        </Switch>
      </div>
    </Router >
  );
}

export default App;