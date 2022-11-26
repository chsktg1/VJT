/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NativeBaseProvider} from 'native-base';
import React, {useState} from 'react';
import Login from './src/Components/Login';
import SignUp from './src/Components/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Components/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './src/Components/About';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SettingsNavigation from './src/Components/SettingsNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const [isAuth, setIsAuth] = useState(false);
  return (
    <NativeBaseProvider>
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
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Home',
                drawerIcon: ({focused, size}) => {
                  return (
                    <Icon
                      name="home"
                      size={20}
                      style={{paddingLeft: 10}}
                      color={focused ? '#000000' : '#bbbbbb'}
                    />
                  );
                },
              }}
            />
            <Drawer.Screen
              name="About"
              component={About}
              options={{
                title: 'About',
                drawerIcon: ({focused, size}) => {
                  return (
                    <Icon
                      name="tree"
                      size={20}
                      style={{paddingLeft: 10}}
                      color={focused ? '#000000' : '#bbbbbb'}
                    />
                  );
                },
              }}
            />
            <Drawer.Screen
              name="Setting"
              options={{
                title: 'Settings',
                drawerIcon: ({focused, size}) => {
                  return (
                    <Icon
                      name="gear"
                      size={20}
                      style={{paddingLeft: 10}}
                      color={focused ? '#000000' : '#bbbbbb'}
                    />
                  );
                },
              }}>
              {props => <SettingsNavigation {...props} setIsAuth={setIsAuth} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
