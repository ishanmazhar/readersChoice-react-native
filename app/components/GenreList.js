import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text } from 'react-native';

const GenreList = props => {
    return (
        <TouchableHighlight onPress={props.selectPlace}>
            <View style={styles.container}>
                {props.item.image && <Image source={props.item.image} style={styles.image} />}
                <View style={styles.details}>
                    <Text style={styles.name}>{props.item.genre}</Text>
                    <Text style={styles.description} numberOfLines={3}>{props.item.description}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontWeight: "500",
        fontSize: 20, 
    },
    description: {
        color: "#6e6969"
    }
})

export default GenreList;