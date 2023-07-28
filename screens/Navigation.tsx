import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import Header from '../components/common/Header';
import Notification from './Notification';
import WishList from './WishList';
import ItemPage from './ItemPage';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Notification' component={Notification} />
        <Stack.Screen name='Wishlist' component={WishList} />
        <Stack.Screen name='Item' component={ItemPage} />
      </Stack.Navigator>
      <Header />
    </NavigationContainer>
  )
}