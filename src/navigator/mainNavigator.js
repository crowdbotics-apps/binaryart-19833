import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings95018Navigator from '../features/Settings95018/navigator';
import UserProfile95011Navigator from '../features/UserProfile95011/navigator';
import Settings95010Navigator from '../features/Settings95010/navigator';
import Settings95008Navigator from '../features/Settings95008/navigator';
import SignIn295006Navigator from '../features/SignIn295006/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings95018: { screen: Settings95018Navigator },
UserProfile95011: { screen: UserProfile95011Navigator },
Settings95010: { screen: Settings95010Navigator },
Settings95008: { screen: Settings95008Navigator },
SignIn295006: { screen: SignIn295006Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
