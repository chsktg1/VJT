import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import userDefault from '../../../assets/userDefault.jpg';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'native-base';
const allSettings = [
  {name: 'Privacy Policy', pageName: 'PP'},
  {name: 'Terms and Conditions', pageName: 'T&C'},
  {name: 'settings3', pageName: 'PP'},
  {name: 'settings4', pageName: 'PP'},
];

const Settings = props => {
  const {navigation, setIsAuth} = props;

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
              onPress={() => navigation.navigate(i.pageName)}
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
      <Button size="md" colorScheme="danger" onPress={() => setIsAuth(false)}>
        Logout
      </Button>
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
    marginTop: 10,
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
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  lastElement: {borderBottomWidth: 1},
});
