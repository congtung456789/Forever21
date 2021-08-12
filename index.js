/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Myapp from './component/sanpham';
import login from './component/login';
import YourWishlist from './component/YourWishlist';
import Bag from './component/Bag';
import AddToCart from './component/AddToCart';
import swiper from './component/swiper';
AppRegistry.registerComponent(appName, () => YourWishlist);
