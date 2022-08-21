import React from 'react';
import {View, Text} from 'react-native';

const DiscoverScreen = () => {
    return (
        <View
        style={{
            height: '100%',
            backgroundColor: '#8fbc8f',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 0}}>
            Discover
            </Text>
        </View>
    );
};

export default DiscoverScreen;