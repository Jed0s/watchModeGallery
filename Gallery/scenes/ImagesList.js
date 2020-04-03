import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Button,
    Dimensions, TouchableWithoutFeedback, Text, ImageBackground } from 'react-native';
import fetch from 'node-fetch';
import APP_ACCESS_KEY from '../confident/secret';

const width = Dimensions.get('window').width;


export default function ImagesList({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [NumOfPictures, setNumOfPictures] = useState(15);


    useEffect(() => {
        loadData();
    });

    function loadData() {
        fetch(`https://api.unsplash.com/photos/?1&per_page=${NumOfPictures}&client_id=${APP_ACCESS_KEY}`)
            .then(res => res.json())
            .then(json => { setData(json) })
            .catch((error) => console.error(error))
            .finally(() => {
                setLoading(false);
            });
    }

    function handlePressLoad() {
        setNumOfPictures(NumOfPictures+15);
    }

    return (
        <View style = { styles.container }>
            { isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data = { data }
                    renderItem = { ({ item }) => (
                        <TouchableWithoutFeedback
                            onPress = {() => {
                                navigation.navigate('CurrentImage', { image: item })
                            }}
                        >
                            <ImageBackground
                                source = {{ uri: item.urls.regular }}
                                style = {[ styles.image, { height: item.height * width / item.width }]}
                                resizeMode="contain"
                            >
                                <View style = { styles.textInImg }>
                                    <Text style = { styles.bottomText }>{ item.user.name }</Text>
                                </View>
                            </ImageBackground>
                        </TouchableWithoutFeedback>
                    )}
                />
            )}
            <Button
                color = 'black'
                onPress = {() => {
                    handlePressLoad()
                }}
                title = { 'Load more images' }
            />
        </View>
    )
}


const styles = StyleSheet.create ({
    bottomText: {
        color: 'white',
        fontSize: 15,
        margin: 10,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    image: {
        width: width,
        marginBottom: 2,
        justifyContent: 'flex-end',
        textAlign: 'left',
    },
    textInImg: {
        position: 'absolute',
    }
});