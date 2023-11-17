import React from "react";
import { View, Text, Image, StyleSheet,ScrollView } from "react-native"

const Home = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.headerViewStyle]}>
                <Image source={require("../Asset/navicon-1.png")} style={[styles.imageStyle]} />

                <View style={[styles.ImageViewStyle]}>
                    <Image source={require("../Asset/Mailicon.png")} style={[styles.imageStyle1]} />
                    <Text style={[styles.TextTopStyle]}>
                        Han Dynasty
                    </Text>
                </View>
            </View>
            <View style={[styles.secondMailViewStye]}>
                <View style={[styles.dolarimageView]}>
                    <View style={{ borderWidth: 1, padding: 4, borderRadius: 30, borderRightColor: '#721F0D' }}>
                        <Image
                            source={require("../Asset/Dolar.png")}
                            style={[styles.dolarImagestyle]}
                        />

                    </View>
                    <Text style={[styles.PointTextStyle]}>
                        200 Royalty Point
                    </Text>


                </View>
            </View>

            <View style={[styles.bigImageStyle]}>
                <Image
                    source={require("../Asset/Layer2.png")}
                />
            </View>
            <View style={[styles.boxMainViewstyle]}>
                <View style={[styles.secondViewStyle]}>
                    <View style={[styles.boxViewStyle1]}>
                        <Image
                            source={require("../Asset/Hindi.png")}
                            style={[styles.imageBoxStyle]}
                        />
                        <Text style={[styles.boxTextStyle]}>
                            My Coupons
                        </Text>
                    </View>
                    <View style={[styles.boxViewStyle]}>
                        <Image
                            source={require("../Asset/Layer1.png")}
                            style={[styles.imageBoxStyle]}
                        />
                        <Text style={[styles.boxTextStyle]}>
                            Promotions
                        </Text>
                    </View>
                </View>
                <View style={[styles.secondViewStyle1]}>
                    <View style={[styles.boxViewStyle1]}>
                        <Image
                            source={require("../Asset/Maths.png")}
                            style={[styles.imageBoxStyle]}
                        />
                        <Text style={[styles.boxTextStyle]} >
                            Services info
                        </Text>
                    </View>
                    <View style={[styles.boxViewStyle]}>
                        <Image
                            source={require("../Asset/English.png")}
                            style={[styles.imageBoxStyle]}
                        />
                        <Text style={[styles.boxTextStyle]}>
                            My Membershios
                        </Text>
                    </View>
                </View>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF5E7',
    },
    imageStyle: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        tintColor: '#721F0D'

    },
    imageStyle1: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        tintColor: '#721F0D'

    },
    headerViewStyle: {
        marginTop: 32,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ImageViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: "15%"
    },
    TextTopStyle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#721F0D'
    },
    boxViewStyle: {
        backgroundColor: 'white',
        width: "40%",
        alignItems: 'center',
        padding: 4,
        marginLeft: "10%",
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation:4
    },
    boxViewStyle1: {
        backgroundColor: 'white',
        width: "40%",
        alignItems: 'center',
        padding: 4,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 4
    },
    imageBoxStyle: {
        width: 50,
        height: 50
    },
    boxTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
        color:'#721F0D'
    },
    secondMailViewStye: {
        alignItems: 'center',
        marginTop: 8
    },
    dolarimageView: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    dolarImagestyle: {
        width: 12,
        height: 12
    },
    PointTextStyle: {
        fontSize: 12,
        marginLeft: 10,
        fontWeight: '600',
        color: '#721F0D'
    },
    bigImageStyle: {
        alignItems: 'center',
        marginVertical: 16
    },
    boxMainViewstyle: {
        alignItems: 'center'
    },
    secondViewStyle: {
        flexDirection: 'row',

        // marginHorizontal: 24,
        marginTop: 20
    },
    secondViewStyle1: {
        flexDirection: 'row',
        // marginHorizontal: 24,
        marginTop: 20
    }

});
export default Home