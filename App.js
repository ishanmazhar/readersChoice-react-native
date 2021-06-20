
import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './app/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { TouchableOpacity } from 'react-native';
import Login from './app/components/Login';
import HomeScreen from './app/screens/HomeScreen';
import { navigationRef, navigate } from './app/NavigationRoot';
import Icons from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <Provider store={store}>
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{
//               headerLeft: null,
//               headerRight: () => (
//                 <TouchableOpacity onPress={() => {
//                   navigate("Login");
//                 }}>
//                   <Icons name="power-off" size={26} style={{ paddingRight: 10 }} />
//                 </TouchableOpacity>
//               )
//             }}
//           />
//         </Stack.Navigator>
//       </Provider>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
