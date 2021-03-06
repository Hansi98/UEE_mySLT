import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Alert, TextInput, Modal, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Container, Header, Content, Text, Button, Toast } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
const { width, height } = Dimensions.get('window');



class PasswordchangeVisal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pwModalshow: false,

            pw: '',
            newpw: '',
            conpw: '',

            showToast: false
        };
    }
    updateValue(text, field) {

        if (field == 'pw') {
            this.setState({
                pw: text
            });
        }
        else if (field == 'newpw') {
            this.setState({
                newpw: text
            });
        }
        else if (field == 'conpw') {
            this.setState({
                conpw: text
            });
        }

    }
    validateFields = () => {


        if (this.state.pw === "") {
            this.setState({
                pwModalshow: true
            });
        }
        else if (this.state.newpw === "" || this.state.conpw === "" || (this.state.newpw != this.state.conpw === "")) {
            this.setState({
                pwModalshow: true
            });
        }

        else {
            Toast.show({
                text: "Password Successfully Reseted !",
                position: 'bottom',
                textStyle: { fontWeight: 'bold' },
                duration: 4000,
                style: { backgroundColor: "#00ff80", height: 80, margin: 15, borderRadius: 20, borderWidth: 1, borderColor: '#ffffff' },
                buttonText: "Okay",
                buttonStyle: { backgroundColor: "#ffffff", justifyContent: 'center', alignSelf: 'center' },
                buttonTextStyle: { color: "#00ff80" },

            })
        }
    }



    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#ffffff'

            }}>

                {/* Create your PasswordchangeVisal UI's here -- PasswordchangeVisal */}

                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: 20, }}>Sri Lanka Telecom</Text>
                            <Text style={{ fontSize: 28, color: '#009eff' }}>Reset Your Password</Text>
                            <View style={{ marginTop: -5, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, color: '#C0C0C0' }}>App/Portal </Text>
                            </View>

                        </View>

                    </View>

                    <View style={{
                        flex: 5, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 80, borderRadius: 20, marginTop: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                    }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 16 }}>You may change your</Text>
                                <Text style={{ fontSize: 16 }}>portal password</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={{ width: width / 3, height: height / 6.5 }}
                                    source={require('../assets/pwchange.jpg')}
                                />
                            </View>

                        </View>
                        {/* MODAL VOUCHER------------------------------------------------------------------------------------------------------------------- */}

                        <Modal style={{ flex: 1 }}
                            transparent={true}
                            visible={this.state.pwModalshow}>
                            <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.0)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 23, }}>
                                    <View style={{ backgroundColor: "#ffffff", paddingVertical: 30, borderTopColor: "black", paddingHorizontal: 30, borderRadius: 23, width: 340 }}>
                                        <TouchableOpacity
                                            onPress={() => { this.setState({ pwModalshow: false }) }}
                                        >
                                            <View style={{ flexDirection: 'row', }}>
                                                <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#222222' }}>New Password</Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text >X</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <View
                                            style={{
                                                borderBottomColor: '#d3d3d3',
                                                borderBottomWidth: 1,
                                                padding: 10
                                            }}
                                        ></View>
                                        <View style={{ alignItems: 'center', alignContent: 'center', marginTop: 5, marginBottom: 30 }}>
                                            <Image
                                                style={{ width: 60, height: 60 }}
                                                source={require('../assets/warning.gif')}
                                            />

                                            <Text style={{ fontSize: 14, color: '#4c4c4c' }}>Your passwords do not match!</Text>
                                        </View>
                                    </View>
                                    <View style={{ position: 'absolute', bottom: 1, justifyContent: 'center', alignItems: 'center', left: 50, right: 50 }} >
                                        <TouchableOpacity style={{ height: 45, width: 150, backgroundColor: '#009eff', borderRadius: 23, justifyContent: 'center', alignItems: 'center', }}
                                            onPress={() => { this.setState({ pwModalshow: false }) }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                                <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>OK</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        {/* MODAL------------------------------------------------------------------------------------------------------------------- */}

                        <View style={{ flex: 2, }}>
                            <View style={{
                                flex: 4, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20, marginBottom: 20, borderRadius: 20, marginTop: 5,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                                <ScrollView>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Current Password</Text>
                                        <TextInput
                                            onFocus={this.onFocus}
                                            autoFocus={false}
                                            placeholder="*********"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.updateValue(text, 'pw')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>New Password</Text>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="*********"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.updateValue(text, 'newpw')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: '#009eff', marginHorizontal: 20, }}>Confirm Password</Text>
                                        <TextInput style={{}}
                                            autoFocus={false}
                                            placeholder="*********"
                                            style={styles.textInput}
                                            placeholderTextColor="#C0C0C0"
                                            secureTextEntry={true}
                                            onChangeText={(text) => this.updateValue(text, 'conpw')}
                                        />
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <TouchableOpacity onPress={this.validateFields}>
                                            <View style={{ ...styles.buttonmain, backgroundColor: '#009eff', }}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Reset</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </ScrollView>
                            </View>

                        </View>


                    </View>






                </View>



                {/* Create your PasswordchangeVisal UI's here -- PasswordchangeVisal */}

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#ffffff',
                    width: 84,
                    height: 82,
                    borderRadius: 40,
                    bottom: 35,
                    zIndex: 10


                }}>

                    <View style={[styles.button, styles.actionBtn]}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("MainUI")}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/009EFF/pie-chart-4-xxl.png' }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#009eff' }}>Usage </Text>
                    </View>




                </View>
                <View style={{

                    position: 'absolute',
                    backgroundColor: '#009eff',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                    <View style={{


                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Manage")}>
                            <Image

                                style={{ width: 30, height: 30 }}

                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/settings-2-xxl.png' }}

                            >

                            </Image>

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Manage</Text>
                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 10
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("PurchaseHistory")}
                        >
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/clock-6-xxl.png' }}

                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>History </Text>
                    </View>

                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginStart: 75,
                    }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Promotions")}
                        >
                            <Image
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/light-bulb-2-xxl.png' }}

                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Promo </Text>
                    </View>
                    <View style={{
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly',

                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Profile")}
                        >
                            <Image
                                source={{ uri: 'https://www.iconsdb.com/icons/preview/color/F1F3F8/user-8-xxl.png' }}

                                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                                containerStyle={{ marginHorizontal: 16 }}
                            />

                        </TouchableOpacity>
                        <Text style={{ justifyContent: 'center', alignItems: 'center', color: '#f1f3f8' }}>Profile </Text>

                    </View>

                    {/* </View> */}
                </View>
            </View>
        );
    }


}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 40,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#f1f3f8',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#009eff'


    },
    textInput: {
        height: height / 18,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 2,
        borderColor: "#008ECC"

    },
    buttonmain: {
        backgroundColor: 'white',
        height: height / 15,
        marginHorizontal: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    },


});
export default PasswordchangeVisal;