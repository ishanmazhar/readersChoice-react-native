import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Scifi from './screens/Scifi';
import History from './screens/History';
import Thriller from './screens/Thriller';
import Comics from './screens/Comics';
import MenuScreen2 from './screens/MenuScreen2';
import BookDetailScreen from './screens/BookDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import Icon from './components/Icon';
import Login from './components/Login';
import Logout from './components/Logout';
import Icons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Text, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

{/* <Stack.Navigator>
    {state.userToken == null ? (
      // No token found, user isn't signed in
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign in',
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
    ) : (
      // User is signed in
      <Stack.Screen name="Home" component={HomeScreen} />
    )}
  </Stack.Navigator> */}

{/* <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    navigate("Login");
                }}>
                    <Icons name="power-off" size={26} style={{ paddingRight: 10 }} />
                </TouchableOpacity>
            )
        }}
    />
</Stack.Navigator> */}

// const HomeStack = () => {
//     const navigation = useNavigation();
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerRight: () => (<Icon
//                     action={() => navigation.toggleDrawer()}
//                     name="ios-menu"
//                     color="black"
//                     size={24}
//                     iconStyle={{
//                         paddingRight: 15
//                     }}
//                 />),
//                 headerStyle: {
//                     backgroundColor: '#F53B50',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'bold',
//                 }
//             }}
//         >
//             <Stack.Screen name="Login" component={Login} />
//         </Stack.Navigator>
//     )
// }

const BooksGenre = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />),
                headerStyle: {
                    backgroundColor: '#F53B50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Genre" component={MenuScreen2} />
            <Stack.Screen name="Science Fiction" component={Scifi} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Thriller" component={Thriller} />
            <Stack.Screen name="Comics" component={Comics} />
            <Stack.Screen name="Book Detail" component={BookDetailScreen} options={({ route }) => ({ title: route.params.place.name })} />
        </Stack.Navigator>
    )
}

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />),
                headerStyle: {
                    backgroundColor: '#F53B50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen name="Favourites" component={FavouritesScreen} />
        </Stack.Navigator>
    )
}

const DrawerScreen = props => {
    // const navigation = useNavigation();
    return (
        <Drawer.Navigator initialRouteName="Genre">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Genre" component={BooksGenre} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}
const AppNavigator = (props) => {
    // const logout = null;
    // if (props.token !== null)
    //     logout = (<Drawer.Screen name="Logout" component={Logout} />)
    // else
    //     logout = null; 

    // const login = null;
    // if (props.token === null)
    //     login = (<Drawer.Screen name="Login" component={Login} />)

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            {props.token === null ? (
                <Drawer.Screen name="Login" component={Login} />
            ) : (
                <Drawer.Screen name="Genre" component={DrawerScreen} />
            )}


            {/* <Drawer.Screen name="Favourites" component={FavStack} /> */}
            {/* {login} */}
            {/* {logout} */}
        </Drawer.Navigator>
    )
}

export default connect(mapStateToProps)(AppNavigator);