import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input} placeholder='seu-email@gmail.com' placeholderTextColor='#999' keyboardType='email-address'/>

          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput style={styles.input} placeholder='sua-senha' placeholderTextColor='#999' secureTextEntry={true}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
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
    fontWeight: 'bold',
  }
});
