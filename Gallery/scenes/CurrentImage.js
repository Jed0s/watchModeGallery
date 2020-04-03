import React from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';

const width = Dimensions.get('window').width;


export default function CurrentImage({route, navigation }) {
    const { image } = route.params;
    return (
        <View style = { styles.singleImage }>
            <TouchableWithoutFeedback
                onPress = {() => {
                    navigation.navigate('ImagesList')
                }}
            >
                <ImageBackground
                    source = {{ uri: image.urls.regular }}
                    style = {{ width: width, height: image.height * width / image.width }}
                    resizeMode="contain"
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create ({
    singleImage: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: "center",
        backgroundColor: 'black',
    },
});