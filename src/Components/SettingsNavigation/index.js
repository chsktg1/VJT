import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivacyPolicy from '../PrivacyPolicy';
import Settings from '../Settings';
import TandC from '../TandC';
const SettingsNavigation = props => {
  const SettingStack = createNativeStackNavigator();
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen options={{headerShown: false}} name="Settings">
        {prop => <Settings {...props} />}
      </SettingStack.Screen>
      <SettingStack.Screen name="PP" component={PrivacyPolicy} />
      <SettingStack.Screen name="T&C" component={TandC} />
    </SettingStack.Navigator>
  );
};

export default SettingsNavigation;
