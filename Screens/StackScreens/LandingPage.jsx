// components/LandingPage.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  const goToSignUp = () => {
    // Navigate to the sign-up page
    navigation.navigate('SignUp');
  };

  const goToLogin = () => {
    // Navigate to the login page
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://drive.google.com/uc?export=download&id=1a0rrtvya7hfgWe2PNpOqaqhmPpiZv-4n' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to EduGate</Text>
      <Text style={styles.subtitle}>Unlock your potential through learning</Text>
      <TouchableOpacity style={styles.button} onPress={goToSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={styles.loginLink}>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 16,
    marginBottom: 10,
  },
  loginLink: {
    color: 'blue',
    fontSize: 14,
    textDecorationLine: 'underline', // Add this line to underline the text
  },
});

export default LandingPage;
