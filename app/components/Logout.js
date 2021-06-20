
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Login from './Login';
import { navigationRef, navigate } from '../NavigationRoot';
import Icons from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.logout();
                this.props.navigation.navigate("Login")
                }
            }>
                <Icons 
                    name="power-off" 
                    size={26} 
                    style={{ paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }} />
            </TouchableOpacity>
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);