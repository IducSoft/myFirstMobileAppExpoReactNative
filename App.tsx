import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store/configureStore";
import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timer from './src/views/Timer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer >
            <Stack.Navigator initialRouteName="Home" >
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Timer" component={Timer} />
            </Stack.Navigator>
          </NavigationContainer>
      </PersistGate>
    </Provider>
    
  );
}


