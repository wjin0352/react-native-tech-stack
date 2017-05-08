import { AppRegistry, UIManager,
 } from 'react-native';
import App from './src/App';

// For animation using LayoutAnimation
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('tech_stack', () => App);