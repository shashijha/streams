import React from "react";
import { Router, BrowserRouter, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
// clined id
// 906885308835-pfa0ah9010i6pgdbm96a1sdt5gdbgai5.apps.googleusercontent.com
/*const page1 = () => {
  return (
    <div>
      <h1>Page1 </h1>
      <Link to="/page2">Go to page2</Link>
    </div>
  );
};
const page2 = () => {
  return (
    <div>
      <h1>Page2 </h1>
      <Link to="/">Go to page1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={page1} />
        <Route path="/page2" component={page2} />
      </BrowserRouter>
    </div>
  );
};*/
