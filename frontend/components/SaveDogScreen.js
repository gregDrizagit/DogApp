import React from 'react';
import {connect} from 'react-redux'
import Styles from '../Styles'
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
  } from 'react-native';

import InputContainer from './InputContainer'

class SaveDogScreen extends React.Component{

    render(){
        console.log(this.props)
        return(
            <View style={Styles.container}>
                <Image 
                    source={{uri: this.props.img_url}} //render the image that comes through redux props
                    style={{width: 300, height: 300}}
                />
                {/*Input container abstracts the text input field and submit button */}
                <InputContainer /> 
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return { img_url: state.img_url }
}
export default connect(mapStateToProps)(SaveDogScreen) //connect component to redux store 
