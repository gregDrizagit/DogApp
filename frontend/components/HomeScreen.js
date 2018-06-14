import React from 'react'
import DogListContainer from './DogListContainer'
import Styles from '../Styles'

import {
    StyleSheet,
    Button,
    Text,
    View
  } from 'react-native';


  //Home screen is the first screen the user sees. Here the user can see a list of 
  //dog images the user saved to the DB. It has a button that links to the Browse Dog screen
  //I also render another component called DogListContainer which handles the actual list of dogs.
class HomeScreen extends React.Component{
    render(){
        return(
            <View style={Styles.container}>
            {/*Each view is styled with the container class. 
            It just gives it a white color and centers everything in the container*/}
                <Button
                    title="Browse Dogs"
                    onPress={() => this.props.navigation.navigate('DogView')}
                />
                <Text>Your dogs:</Text>
                {/* It seems like subchildren don't have access to the navigation prop so we have to pass it manually  */}

                <DogListContainer navigation={this.props.navigation} />
                
            </View>
        )
    }
}


export default HomeScreen

