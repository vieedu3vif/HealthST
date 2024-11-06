/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListPatient from './src/screens/home/ListPatient';
import InforPatient from './src/screens/home/InforPatient';
import HearRate from './src/screens/home/HeartRate';
import { ThingsBoard } from './src/assets/API/ThingsBoard';
import RealtimeData from './src/assets/API/RealtimeData';


AppRegistry.registerComponent(appName, () => HearRate);
