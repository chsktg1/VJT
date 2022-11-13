import React, {useState} from 'react';
import {
  View,
  Button,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import userDefault from '../../../assets/userDefault.jpg';
import ImagePicker from 'react-native-image-crop-picker';
import {Actionsheet, useDisclose} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivacyPolicy from '../PrivacyPolicy';
const allSettings = [
  {name: 'Privacy Policy', pageName: 'PP'},
  {name: 'Terms and Conditions', pageName: 'PP'},
  {name: 'settings3', pageName: 'PP'},
  {name: 'settings4', pageName: 'PP'},
];

const Settings = props => {
  const {navigation} = props;
  const settingStack = createNativeStackNavigator();
  const selectImageFromGallery = async () => {
    const profilePicture = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    console.log('here');
    setProfilePic(profilePicture.path);
  };

  const [profilePic, setProfilePic] = useState(userDefault);

  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <SafeAreaView style={styles.body}>
      <TouchableWithoutFeedback onPress={selectImageFromGallery}>
        {profilePic === userDefault ? (
          <ImageBackground
            source={profilePic}
            imageStyle={{borderRadius: 50}}
            style={styles.profilePicStyle}
          />
        ) : (
          <ImageBackground
            source={{uri: profilePic}}
            imageStyle={{borderRadius: 50}}
            style={styles.profilePicStyle}
          />
        )}
      </TouchableWithoutFeedback>
      <View style={styles.secondaryView}>
        <Text>Hey, Chittipolu Sumanth Kumar</Text>
        <View style={{width: '100%'}}>
          {allSettings.map((i, e) => (
            <TouchableOpacity
              key={i.name}
              style={
                e === allSettings.length - 1
                  ? [styles.settingButtons, styles.lastElement]
                  : styles.settingButtons
              }>
              <Text>{i.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <settingStack.Navigator>
        <settingStack.Screen name="PP" component={PrivacyPolicy} />
      </settingStack.Navigator>
    </SafeAreaView>
  );
};
export default Settings;

const styles = StyleSheet.create({
  profilePicStyle: {
    width: 100,
    height: 100,
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  secondaryView: {
    paddingTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingButtons: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  lastElement: {borderBottomWidth: 1},
});
