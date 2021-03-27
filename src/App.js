import {Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import Plans from './component/Plans';
import Schedule from './component/Schedule';
import Classes from './component/Classes';
import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';



function App() {
  return (
    <>
    
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/Schedule" component={Schedule}></Route>
    <Route exact path="/Classes" component={Classes}></Route>
    <Route exact path="/Plans" component={Plans}></Route>
    <Route exact path="/Login" component={Login}></Route>
    <Route exact path="/Register" component={Register}></Route>
    <Route exact path="/Dashboard" component={Dashboard}></Route>
    </Switch>

    </>
  );
}

export default App;
