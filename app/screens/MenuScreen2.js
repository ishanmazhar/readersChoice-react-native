import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import GenreList from '../components/GenreList';
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

const MenuScreen2 = (props) => {
    // useEffect(() => {
    //     props.getDishes();
    // }, []);

    return (
        <View>
            <GenreList item={props.scifi.filter((site) => site.featured)[0]} selectPlace={() => props.navigation.navigate('Science Fiction')} />
            <GenreList item={props.history.filter((site) => site.featured)[0]} selectPlace={() => props.navigation.navigate('History')} />
            <GenreList item={props.thriller.filter((site) => site.featured)[0]} selectPlace={() => props.navigation.navigate('Thriller')} />
            <GenreList item={props.comics.filter((site) => site.featured)[0]} selectPlace={() => props.navigation.navigate('Comics')} />
        </View>
    )
}

export default connect(mapStateToProps)(MenuScreen2);