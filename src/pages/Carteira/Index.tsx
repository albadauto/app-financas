import { Button, NativeEventEmitter, NativeSyntheticEvent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { api } from '../../api';
import { showMessage } from 'react-native-flash-message';

interface ICarteira{
  saldo:string;
  nome: string;
}
export default function Carteira({ navigation }: any) {

  const [ carteiraData, setCarteiraData ] = useState<ICarteira>({} as ICarteira);
  function onSubmit(){
    api.post("/carteira", carteiraData).then(() => {
      showMessage({ message: "Cadastrado com sucesso", type: "success"})
    }).catch(err => console.log(err))
  }
  return (
    <>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.saldoContainer}>
          <Text style={styles.total}>Saldo total:</Text>
          <Text style={styles.saldo}>R$ 9000.00</Text>
        </View>


        <Text>AQUIIIIIIIIIIII</Text>
        <TextInput placeholder='Saldo' style={styles.textinput} value={carteiraData.saldo} onChangeText={(text) => setCarteiraData({...carteiraData, saldo: text})}/>
        <TextInput placeholder='Nome' style={styles.textinput} value={carteiraData.nome} onChangeText={(text) => setCarteiraData({...carteiraData, nome: text })}/>
        <Button title='Enviar' onPress={onSubmit}/>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    margin: 10,
    
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  saldo: {
    fontSize: 20,
    color: 'blue'
  },
  saldoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textinput:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10
  }
})