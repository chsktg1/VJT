import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from 'react-native-login-screen';
const Login = props => {
  const {navigation, setIsAuth} = props;
  return (
    <LoginScreen
      logoImageStyle={styles.stylingLogo}
      logoImageSource={require('../../../assets/VajratejaLogo-nobg.png')}
      onLoginPress={() => {
        setIsAuth(true);
      }}
      onSignupPress={() => {
        navigation.navigate('signup');
      }}
      onEmailChange={email => {}}
      onPasswordChange={password => {}}
    />
  );
};

const styles = StyleSheet.create({
  stylingLogo: {
    backgroundColor: 'rgb(49, 5, 14)',
    borderRadius: 65,
    width: 130,
    height: 130,
    marginTop: 5,
    borderWidth: 3,
  },
});

export default Login;
