import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the type for the stack navigator's parameters
type RootStackParamList = {
  Login: undefined;
};

// Define the navigation prop type for Register component
type LoginNavigationProp = NavigationProp<RootStackParamList, 'Login'>;

const RegisterPage: React.FC = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  // Go to Login Screen
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
      setPasswordError(
        'Password must include at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      // Call your sign-up logic or API here
      Alert.alert('Registration Successful', 'User registered successfully!');
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{  alignItems: 'center' }}>
          <Image source={require('../assets/ramen.png')} style={{ paddingTop: 20, width: 200, height: 200 }} />
          
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 35 }}>SIGN UP</Text>

          {/* Google, Facebook, and Twitter icons */}
          <View style={styles.icons}>
            <View style={styles.oneicon}>
                <Image source={require('../assets/google.png')} style={styles.imageicon}/>
            </View>
            
            <View style={styles.oneicon}>
                <Image source={require('../assets/facebook.png')} style={styles.imageicon}/>
            </View>

            <View style={styles.oneicon}>
                <Image source={require('../assets/twitter.png')} style={styles.imageicon}/>
            </View>
          </View>

          <Text style={{ fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Or sign up with</Text>
        </View>

        <View style={styles.input1}>
          <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name" placeholderTextColor="white"
          style={styles.textinput}
        />
        </View>
        <Text style={[styles.errorText, !nameError && { display: 'none' }]}>
          {nameError}
        </Text>

        <View style={styles.input1}>
          <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email" placeholderTextColor="white"
          style={styles.textinput}
        />
        </View>
        <Text style={[styles.errorText, !emailError && { display: 'none' }]}>
          {emailError}
        </Text>

        <View style={styles.input1}>
          <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username" placeholderTextColor="white"
          style={styles.textinput}
        />
        </View>
        <Text style={[styles.errorText, !usernameError && { display: 'none' }]}>
          {usernameError}
        </Text>
        
        <View style={styles.input1}>
          <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password" placeholderTextColor="white"
          style={styles.textinput}
          secureTextEntry
        />
        </View>
        <Text style={[styles.errorText, !passwordError && { display: 'none' }]}>
          {passwordError}
        </Text>

        <View style={styles.input2}>
          <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password" placeholderTextColor="white"
          style={styles.textinput}
          secureTextEntry
        />
        </View>
        <Text style={[styles.errorText, !confirmPasswordError && { display: 'none' }]}>
          {confirmPasswordError}
        </Text>

        <View style={{  alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={ handleSignUp }>
            <Text style={styles.buttontext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <Text style={{color: 'white'}}>Already a member?</Text>
          <Text style={{color: '#FECC81'}} onPress={handleLogin}> Login</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#841D06',
    padding: 30
  },
  icons: {
    flexDirection: 'row', 
    marginTop: 20, 
    marginBottom: 20 
  },
  oneicon: {
    width: 69, 
    height: 48, 
    borderWidth: 1, 
    borderColor: 'rgba(255, 255, 255, 0.6)', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 20
  },
  imageicon: {
    width: 30, 
    height: 30 
  },
  input1: {
    flexDirection: 'row', 
    borderRadius: 24, 
    borderBottomWidth: 1, 
    borderBottomColor: 'white',
    marginTop: 20
  },
  input2: {
    flexDirection: 'row', 
    borderRadius: 24, 
    borderBottomWidth: 1, 
    borderBottomColor: 'white',
    marginTop: 20
  },
  textinput: {
    width: '90%', 
    fontSize: 15, 
    paddingTop: 5, 
    paddingBottom: 5, 
    paddingLeft: 40, 
    color: 'white'
  },
  button: {
    padding: 10, 
    width: '70%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50, 
    borderRadius: 20, 
    backgroundColor: 'white',
    marginTop: 30
  },
  buttontext: {
    color: '#841D06', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  errorText: {
    paddingLeft: 20,
    color: 'red',
    textAlign: 'left',
    marginTop: 10
  },
});

export default RegisterPage;
