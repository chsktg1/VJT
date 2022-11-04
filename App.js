/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Login from './src/Components/Login';
import SignUp from './src/Components/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './src/Components/About';
import Settings from './src/Components/Settings';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <NavigationContainer>
      {!isAuth ? (
        <Stack.Navigator>
          <Stack.Screen name="login">
            {props => <Login {...props} setIsAuth={setIsAuth} />}
          </Stack.Screen>
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
  // return <Home />;
};

export default App;
