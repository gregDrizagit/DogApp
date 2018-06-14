import React from 'react'; 
import Styles from '../Styles'
import {connect} from 'react-redux'
import {
    TextInput,
    View,
    Text,
    Button
  } from 'react-native';
  import Dogs from '../api/dogs'
import { allDogs, addDog } from '../actions';

class InputContainer extends React.Component{

    state = {
       text: 'Dog Name'
    }

    onPress = () => {
        Dogs.postNewDog(this.state.text, this.props.img_url)
        //.then(dog => this.props.dispatch(addDog(dog)) )
    }
    //when we press the button, we post the dog to the database, wait for the response 
    //and then dispatch the new object. My intention here was to push the response item into the 
    //dog collection. This doesn't work for some reason so to see the dog you have to refresh the app

    render(){
        return(
            <View>
                <TextInput
                    style={{height: 45, textAlign:'center',  //render a text input for saving the dog's name 
                            borderColor: 'gray', borderWidth:0.5, width:250}}
                            onChangeText={(text) => this.setState({text})}
                    value={this.state.text} 
                />
                <Button onPress={this.onPress} title="Submit Dog" color="#841584" />{/*Render the submit button */}
            </View>
        )
    }

}
const mapStateToProps = (state) => {
    return { img_url: state.img_url }//provide the component with the image url through redux state
}
export default connect(mapStateToProps)(InputContainer)

