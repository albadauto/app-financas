import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Carteira( { navigation }: any) {
  return (
    <>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.total}>Saldo total:</Text>
      <Text style={styles.saldo}>R$ 9000.00</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 50,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  total:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  saldo:{
    fontSize: 20,
    color: 'blue'
  }
})