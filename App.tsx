import Home from "./src/pages/Home/Index";
import 'react-native-reanimated';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Carteira from "./src/pages/Carteira/Index";
import Header from "./src/components/Header/Index";
import Balance from "./src/components/Balance/Index";
import FlashMessage from "react-native-flash-message";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer >
      <Header name="José Adauto" />
      <Balance saldo={9250.17} gastos={-255.32} />
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Carteira" component={Carteira} options={{headerShown: false}}/>

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
    
    </>
    

  );
}


