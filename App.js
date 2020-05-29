import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

// rota inicial -> initialRouteName: 'Search' para sempre que a aplicação for iniciada ele sempre ir para a tela desejada
//defaultNavigationOptions: -> opções para 

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  }, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    } 
  }
);

export default createAppContainer(navigator);