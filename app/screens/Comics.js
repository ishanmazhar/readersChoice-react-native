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

const Comics = (props) => {
    // useEffect(() => {
    //     props.getDishes();
    // }, []);

    return (
        <View>
            <FlatList
                data={props.comics}
                renderItem={
                    ({ item }) => (<MenuItem item={item} selectPlace={() => props.navigation.navigate('Book Detail', { place: item })} />)
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default connect(mapStateToProps)(Comics);