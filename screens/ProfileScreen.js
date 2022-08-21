import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
    return (
        <View
        style={{
            height: '100%',
            backgroundColor: '#d3d3d3',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 1}}>
            Profile
            </Text>
        </View>
    );
};

export default ProfileScreen;