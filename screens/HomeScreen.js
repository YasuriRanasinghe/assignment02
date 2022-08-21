import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
    return (
        <View
        style={{
            height: '100%',
            backgroundColor: '#f8f8ff',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 0}}>
            Home
            </Text>
        </View>
    );
};

export default HomeScreen;