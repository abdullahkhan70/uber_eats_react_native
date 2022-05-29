/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {mainNavigation} from './components/navigation/mainNavigation';

AppRegistry.registerComponent(appName, () => mainNavigation);
