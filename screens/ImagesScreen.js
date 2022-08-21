import React from 'react';
import {View, Text} from 'react-native';

const ImagesScreen = () => {
    return (
        <View
        style={{
            height: '100%',
            backgroundColor: '#d3d3d3',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 0}}>
            Images
            </Text>
        </View>
    );
};

export default ImagesScreen;