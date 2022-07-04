import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../loginScreen/styles'


const NBscreen = () => {
    const [isShown, setisshown] = useState(false)
    return (
        <SafeAreaView style={styles.mainContainer}>
            {isShown ? <Text>No data found</Text> :
                <><View style={{ width: '95%', backgroundColor: 'gray', paddingVertical: '2%', marginTop: '2%', alignSelf: 'center', borderRadius: 5, flexDirection: 'row', justifyContent: "space-evenly" }}>
                    <View style={{ width: '30%' }}><Text>Group</Text>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '10%' }}>A+</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '10%' }}>A-</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '10%' }}>B+</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '10%' }}>B-</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: '30%' }}><Text>City</Text>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '3%' }}>Lhr</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '3%' }}>Khi</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '3%' }}>Isb</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '3%' }}>Hyd</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: '30%' }}><Text>Area</Text>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '1%' }}>Thokar</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '1%' }}>Johar</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '1%' }}>I-11</Text></TouchableOpacity>
                        <TouchableOpacity style={{ width: '100%' }}><Text style={{ color: 'white', marginLeft: '1%' }}>Saddar</Text></TouchableOpacity>
                    </View>
                </View>
                    <View style={{ width: '100%', paddingVertical: 5, marginTop: '3%' }}>
                        <TouchableOpacity onPress={() => setisshown(true)} style={{ padding: 5, backgroundColor: 'red', borderRadius: 5, alignSelf: 'flex-end', right: '7%' }}><Text style={{ color: 'white' }}>Search</Text></TouchableOpacity>
                    </View></>
            }

        </SafeAreaView>
    )
}

export default NBscreen