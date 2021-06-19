import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MenuItem from '../components/MenuItem';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        scifi: state.places.scifi,
        history: state.places.history,
        thriller: state.places.thriller,
        comics: state.places.comics,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getDishes: () => dispatch(getDishes()),
//     }
// }

const MenuScreen = (props) => {
    // useEffect(() => {
    //     props.getDishes();
    // }, []);

    return (
        <View>
            <FlatList
                data={props.scifi}
                renderItem={
                    ({ item }) => (<MenuItem item={item} selectPlace={() => props.navigation.navigate('Dish Detail', { place: item })} />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}


export default connect(mapStateToProps)(MenuScreen);