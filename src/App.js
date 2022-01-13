
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Allmeetup from './pages/Allmeetup';
import Favoritepages from './pages/favoritepages';
import Newmeetuppage from './pages/newmeetup';
import Layout from './component/layout/layout';
function App() {
  return (
    <Layout>
    
     <Switch>
     <Route path='/' exact><Allmeetup/></Route>
     <Route path='/newmeetup' exact><Newmeetuppage/></Route>
     <Route path='/favorite' exact><Favoritepages/></Route>
     </Switch>
     </Layout>
  );
}

export default App;
