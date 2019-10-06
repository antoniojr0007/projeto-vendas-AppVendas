import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Report from './pages/Report';
import Sale from './pages/Sale';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Dashboard,
    Profile,
    Report,
    Sale
  })
);

export default Routes;