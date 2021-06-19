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

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            {/* <Drawer.Screen name="Menu" component={MenuStack} /> */}
            <Drawer.Screen name="Genre" component={BooksGenre} />
            <Drawer.Screen name="Favourites" component={FavStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;