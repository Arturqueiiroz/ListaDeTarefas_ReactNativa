import {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('E-mail: ' + email + ' e senha: ' + password);
  }
  return (

    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.subtitle}>Registstar</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder='seu-email@gmail.com' placeholderTextColor='#999' keyboardType='email-address' value={email} onChangeText={setEmail} />

          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput style={styles.input} placeholder='sua-senha' placeholderTextColor='#999' secureTextEntry={true} value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 24, alignItems: 'center'}}>
          <Text style={{color: '#6c727f', fontSize: 14}}>Ou entre com</Text>
          <TouchableOpacity style={{marginTop: 18, backgroundColor: '#d84437', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 16}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 18, backgroundColor: '#4267b2', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontSize: 16}}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}  >
            <Text style={styles.registerText}>login</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  headerContainer: {
    marginBottom: 40,
    backgroundColor: '#dde6f5ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    color: '#1a1cle',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7c727f',
  },
  formContainer: {
    backgroundColor: '#ffffffff',
    padding: 24,
    borderRadius: 24,
    shadowColor: '#000000ff',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3, // Sombra para Android
  },
  inputLabel: {
    fontSize: 14,
    color: '#344054',
    fontWeight: 600,
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderColor: '#d0d5dd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1a1cle',
    backgroundColor: '#f9f2fd',
    marginBottom: 20,
  }, 
  button: {
    backgroundColor: '#0066cc',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 14
  },
  forgotPasswordText: {
    color: '#0066cc',
    fontSize: 14,
    fontWeight: 500
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#6c727f',
    fontSize: 14,
  },
  registerText: {
    fontSize: 14,
    color: '#0066cc',
    fontWeight: 'bold',
  }
});
