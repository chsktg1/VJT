import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const SignUp = () => {
  const [focus, setFocus] = useState(false);
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);

  const inputFocus = () => {
    setFocus(true);
  };

  const inputBlur = () => {
    setFocus(false);
  };

  const inputFocus1 = () => {
    setFocus1(true);
  };

  const inputBlur1 = () => {
    setFocus1(false);
  };

  const inputFocus2 = () => {
    setFocus2(true);
  };

  const inputBlur2 = () => {
    setFocus2(false);
  };

  const inputFocus3 = () => {
    setFocus3(true);
  };

  const inputBlur3 = () => {
    setFocus3(false);
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={focus ? styles.textInputStyle2 : styles.textInputStyle}
        placeholder="username"
        onFocus={() => {
          inputFocus();
        }}
        onBlur={() => {
          inputBlur();
        }}
      />
      <TextInput
        style={focus1 ? styles.textInputStyle2 : styles.textInputStyle}
        placeholder="email"
        onFocus={() => {
          inputFocus1();
        }}
        onBlur={() => {
          inputBlur1();
        }}
      />
      <TextInput
        style={focus2 ? styles.textInputStyle2 : styles.textInputStyle}
        placeholder="password"
        onFocus={() => {
          inputFocus2();
        }}
        onBlur={() => {
          inputBlur2();
        }}
      />
      <TextInput
        style={focus3 ? styles.textInputStyle2 : styles.textInputStyle}
        placeholder="confirm password"
        onFocus={() => {
          inputFocus3();
        }}
        onBlur={() => {
          inputBlur3();
        }}
      />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={{color: 'white', textAlign: 'center'}}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle2: {
    width: '97%',
    margin: 4,
    padding: 15,
    borderColor: 'blue',
    borderRadius: 3,
    backgroundColor: 'rgb(236,238,244)',
  },
  textInputStyle: {
    width: '97%',
    margin: 4,
    padding: 15,
    borderRadius: 3,
    backgroundColor: 'rgb(236,238,244)',
  },
  signUpButton: {
    backgroundColor: 'rgb(55,133,247)',
    padding: 10,
    margin: 5,
    borderRadius: 3,
  },
  signUpText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SignUp;
