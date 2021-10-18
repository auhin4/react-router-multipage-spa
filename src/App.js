import { Route, Redirect, Switch } from "react-router-dom";
import Advice from "./components/pages/Advice";
import Welcome from "./components/pages/Welcome";
import Fun from "./components/pages/Fun";
import AllQuotes from "./components/pages/AllQuotes";
import QuoteDetail from "./components/pages/QuoteDetail";
import NewQuote from "./components/pages/NewQuote";
import { NotFound } from "http-errors";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/advice" exact>
          <Advice />
        </Route>
        <Route path="/fun" exact>
          <Fun />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
