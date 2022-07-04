import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    TextInput,
    View,
    ScrollView,
    Modal,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
//import {useDispatch} from 'react-redux';

//local import

import styles from './styles';
// import color from '../../constant/color';
import BackHeader from '../../component/BackHeader';

const AboutUs = ({ navigation }) => {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar animated={true} translucent={false} backgroundColor='#05192D' barStyle='light-content' />
                <BackHeader
                    title="About Us"
                    img={require('../../assets/backIcon.png')}
                    handleBackArrow={() => navigation.goBack()}
                />


                <View style={styles.imgMainCon}>
                    <View style={styles.logoCon}>
                        <Image
                            source={require('../../assets/AppLogo.png')}
                            resizeMode="contain"
                            style={styles.img}
                        />
                    </View>
                </View>

                <View style={styles.txtCon}>
                    <Text style={styles.txt1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>
                <TouchableOpacity style={{ padding: 10, backgroundColor: 'red', alignSelf: 'flex-end', width: '20%', marginRight: '20%', marginTop: '5%', borderRadius: 10 }}>
                    <Text style={{ alignSelf: 'center', color: 'white' }}>Edit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default AboutUs;
