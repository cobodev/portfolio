import { Route, Switch } from 'wouter'
import Intro from '../components/Intro'
import Sections from '../components/Sections'


function Router() {
  return (
    <Switch>
      <Route component={Intro} path='/' />
      <Route component={Sections} path='/sections' />
    </Switch>
  )
}

export default Router