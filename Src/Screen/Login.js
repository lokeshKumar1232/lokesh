import React from "react";
import {
View,
Text,
Image,
StyleSheet,
TextInput,
TouchableOpacity,
Platform

}
    from "react-native"

const Login = () => {
    return (
        <View style={[styles.container]}>

            <View style={[styles.mainViewStyle]}>

                <Image
                    source={require("../Asset/Mailicon.png")}
                    style={[styles.imageStyle]}
                />
                <Text style={[styles.firstTextstyle]}>
                    Han Dynasty
                </Text>
                <Text style={[styles.SecondTextstyle]}>
                    SIGN IN
                </Text>
            </View>

            <View style={[styles.TextInputMainViewStyle]}>
                <Text style={[styles.TextInputLabelStyle]}>
                    Username
                </Text>
                <View style={[styles.innerViewStyle]}>
                    <View style={[styles.ViewDirectionstyle]}>
                        <View style={[styles.ImageViewStyle]} >
                            <Image
                                source={require("../Asset/Profile.png")}
                                style={[styles.profileImagestyle]}
                            />
                        </View>

                        <TextInput />
                    </View>

                </View>
                <View style={[styles.passwordMainViewStyle]}>
                    <Text style={[styles.TextInputLabelStyle]}
                    >
                        Password
                    </Text>
                    <View style={[styles.passwordViewStyle]}>
                        <View style={[styles.ViewDirectionstyle]}>
                            <View
                                style={[styles.ImageViewStyle]}
                            >


                                <Image
                                    source={require("../Asset/Lock.png")}
                                    style={[styles.profileImagestyle]}
                                />
                            </View>
                            <TextInput placeholder="" />
                        </View>
                        <View style={[styles.eyeImageViewStyle]}>
                            <Image
                                source={require("../Asset/Eyeoff.png")}
                                style={[styles.profileImagestyle,{marginTop:Platform.OS === 'ios' ? 7 : 10}]}
                            />
                        </View>

                    </View>
                </View>



            </View>

            <View style={[styles.passwordForgotImage]}>
                <View style={[styles.ImagecheckViewStyle]}>
                <Image
                source={require("../Asset/checkboxe.png")}
                style={[styles.CheckImageStyle]}
                />
                <Text style={[styles.textStyle]}>
                    Remember me
                </Text>
                </View>
                <TouchableOpacity>
                <Text style={[styles.passwordForgotText]}>
                    Forgot Password?
                </Text>
                </TouchableOpacity>
               
               
            </View>
            <View style={[styles.bottomMailViewStyle]}>
            <TouchableOpacity style={[styles.bottonStyle]}>
                <Text style={[styles.bottomTextStyle]}>
                    Login
                </Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.bottomMailViewStyle,{marginTop:8}]}>
            <View style={[styles.ImagecheckViewStyle]}>
                <Text style={[styles.textStyle]}>
                    Don't have account ?
                </Text>
                <Text style={[styles.textStyle,{color:'#721F0D',fontWeight:'800'}]}>
                    Create one
                </Text>
            </View>
            </View>
            
           
            
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    mainViewStyle: {
        alignItems: 'center',
        marginTop: 64
    },
    imageStyle: {
        width: 64,
        height: 64,
        tintColor: "#721F0D"
    },
    firstTextstyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#721F0D',
        marginTop: 8
    },
    SecondTextstyle: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 16
    },
    profileImagestyle: {
        width: 24,
        height: 24,
        tintColor:'#721F0D'
    },
    TextInputLabelStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8
    },
    TextInputMainViewStyle: {
        marginHorizontal: 24,
        marginTop: 32
    },
    innerViewStyle: {
        flexDirection: 'row',
        backgroundColor: '#F1F0EF',
    },
    ViewDirectionstyle: {
        flexDirection: 'row',
        alignItems:'center'
    },
    ImageViewStyle: {
        backgroundColor: '#E4DAD8',
        padding: 10
    },
    eyeImageViewStyle: {
        padding: 6
    },
    passwordViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F1F0EF',
        
        
    },
    passwordMainViewStyle: {
        marginTop: 16
    },
    CheckImageStyle:{
        width:32,
        height:32,
    },
    passwordForgotImage:{
        marginHorizontal:24,
        marginTop:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ImagecheckViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    },
    textStyle:{
        fontSize:16,
        marginLeft:8,
        color:'#000000',
        fontWeight:'700'
    },
    passwordForgotText:{
        fontSize:16,
        fontWeight:'600',
        color:'#721F0D'
    },
    bottonStyle:{
        marginTop:40,
        backgroundColor:'#721F0D',
        height:32,
        justifyContent:'center',
        width:120,
        alignItems:'center',
        borderRadius:24
    },
    bottomMailViewStyle:{
        alignItems:'center'
    },
    bottomTextStyle:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }



})
export default Login