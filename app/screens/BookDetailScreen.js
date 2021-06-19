import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CommentForm from  '../components/CommentForm';

const mapStateToProps = state => {
    return {
        favourites: state.favourites,
    }
}

const placeDetailScreen = props => {
    const place = props.route.params.place;

    return (
        <ScrollView>
            <Image source={place.image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{place.name}</Text>
                <Text>{place.description}</Text>
            </View>
            <View>
                <CommentForm dbPath={place.name}/>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    top: {
        height: 100,
    },
    image: {
        paddingTop: "20%",
        width: "100%",
        height: 500,
    },
    name: {
        fontSize: 30,
        fontWeight: "500",
        marginBottom: 10,
    },
    details: {
        padding: 10,
    }
})

export default connect(mapStateToProps)(placeDetailScreen);