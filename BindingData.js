import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Pictures } from './Pictures';
export default class B5BindingData extends Component {
    icon1 = { icon: require('./Pictures/angry.png'), text: 'Tôi đang giận' }
    icon2 = { icon: require('./Pictures/care.png'), text: 'Tôi quan tâm bạn' }
    icon3 = { icon: require('./Pictures/haha.png'), text: 'Tôi đang vui' }
    icon4 = { icon: require('./Pictures/like.png'), text: 'Ủng hộ bạn nè' }
    icon5 = { icon: require('./Pictures/love.png'), text: 'Tôi đang yêu' }
    icon6 = { icon: require('./Pictures/sad.png'), text: 'Tôi đang buồn' }


    state = {
        icon1: false, icon2: false, icon3: false, icon4: false, icon5: false, icon6: false
    }

    renderIcon() {
        if (this.state.icon1) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon1.icon} />
                    <Text>{this.icon1.text}</Text>
                </>
            )
        }
        if (this.state.icon2) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon2.icon} />
                    <Text>{this.icon2.text}</Text>
                </>
            )
        }
        if (this.state.icon3) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon3.icon} />
                    <Text>{this.icon3.text}</Text>
                </>
            )
        }
        if (this.state.icon4) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon4.icon} />
                    <Text>{this.icon4.text}</Text>
                </>
            )
        }
        if (this.state.icon5) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon5.icon} />
                    <Text>{this.icon5.text}</Text>
                </>
            )
        }
        if (this.state.icon6) {
            return (
                <>
                    <Image style={styles.bigIcon} source={this.icon6.icon} />
                    <Text>{this.icon6.text}</Text>
                </>
            )
        }
    }

    onPressButton = () => {
        this.setState({ icon1: true, icon2: false, icon3: false, icon4: false, icon5: false, icon6: false })
    }
    onPressButton2 = () => {
        this.setState({ icon2: true, icon1: false, icon3: false, icon4: false, icon5: false, icon6: false })
    }
    onPressButton3 = () => {
        this.setState({ icon3: true, icon2: false, icon1: false, icon4: false, icon5: false, icon6: false})
    }

    onPressButton4 = () => {
        this.setState({ icon1: false, icon2: false, icon3: false, icon4: true, icon5: false, icon6: false })
    }
    onPressButton5 = () => {
        this.setState({ icon1: false, icon2: false, icon3: false, icon4: false, icon5: true, icon6: false })
    }
    onPressButton6 = () => {
        this.setState({ icon1: false, icon2: false, icon3: false, icon4: false, icon5: false, icon6: true })
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.textInfo}>Hôm nay bạn thế nào?</Text>
                {this.renderIcon()}

                <View style={styles.iconLine}>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton} >
                        <Image style={styles.icon} source={this.icon1.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton2} >
                        <Image style={styles.icon} source={this.icon2.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton3} >
                        <Image style={styles.icon} source={this.icon3.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton4} >
                        <Image style={styles.icon} source={this.icon4.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton5} >
                        <Image style={styles.icon} source={this.icon5.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressButton6} >
                        <Image style={styles.icon} source={this.icon6.icon} />
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8bbd0',
        flexDirection: 'column',
        // display:'flex'

    },
    textInfo: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 20
    },

    icon: {
        height: 50,
        width: 50,
    },
    iconLine: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 100

    },
    bigIcon:{
        height: 100,
        width: 100,
        marginTop:30,
        marginBottom:20
    }
})
