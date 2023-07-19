import './App.css';

import{Home} from './Home';
import{Student} from './Student';
import{Navigate} from './Navigate';
import NewMulti from './NewMultiForm';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Form } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       School Registeration
     </h3>

     <Navigate/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/Student' component={Student}/>
       <Route path='/NewMultiForm' component={NewMulti}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
