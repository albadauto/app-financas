import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import Actions from '../../components/Actions/Index';
import Balance from '../../components/Balance/Index';
import Header from '../../components/Header/Index';
import Movements from '../../components/Movements/Index';

const LIST = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: 300.90,
    data: '17/09/2022',
    type: 0, //despesas

  },
  {
    id: 2,
    label: 'PIX Cliente X',
    value: 2500.90,
    data: '17/09/2022',
    type: 1, //entradas

  },
  {
    id: 3,
    label: 'Salario',
    value: 7200.30,
    data: '17/09/2022',
    type: 1, //despesas

  }
]

interface IProps {
  id: number;
  label: string;
  value: number;
  data: string;
  type: number;
}


export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>


      <StatusBar style="auto" />
      <FlatList
        style={styles.list}
        data={LIST}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
