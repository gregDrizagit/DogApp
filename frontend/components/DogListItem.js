import React from 'react'
import {
    StyleSheet,
    Text,
    FlatList, 
    View
  } from 'react-native';
  import {viewDog} from '../actions'
  import {connect} from 'react-redux'


class DogListItem extends React.Component{

    selectDog = () => {
        this.props.dispatch(viewDog(this.props.name))
        this.props.navigation.navigate('DogProfile');
    }

 
    render(){
        return(
            <Text onPress={this.selectDog}>{this.props.name}</Text>
        )
    }

        
    
}
export default DogListItem