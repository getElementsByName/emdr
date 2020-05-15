import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomePage } from './pages/home';
import { RunPage } from './pages/run';

interface PropsType {}

const AppRoute: React.FC<PropsType> = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/run">Run</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/run">
            <RunPage />
          </Route>
          {/* The order is important because root path contains all others */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export { AppRoute };
