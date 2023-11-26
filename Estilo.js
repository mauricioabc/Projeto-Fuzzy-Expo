import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTelaFormulario: {
    flex: 1,
    padding: 16,
    alignItems: 'center'
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  containerCampo: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start'
  },
  containerBototoesConf: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  formulario: {
    width: '100%',
    height: 200
  },
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'forestgreen',
  },
  campoConf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap:'wrap'
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  botao: {
    width: 200,
  },
  botaoVoltar: {
    marginBottom: 20,
    width: 260,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    marginLeft: 16,
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
  },
  logoutButton: {
    width: '40%',
    height: '100',
    marginLeft: '55%',
    marginTop: '4%'
  }, 
  
});

export default styles;