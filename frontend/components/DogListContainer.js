import React,{ Component } from 'react'
import Styles from '../Styles'
import {connect} from 'react-redux'
import {allDogs} from '../actions'
import {
    StyleSheet,
    Text,
    FlatList, 
    View
  } from 'react-native';
import DogListItem from './DogListItem'
import Dogs from '../api/dogs'

class DogListContainer extends React.Component{

    state = {}

    componentDidMount(){
        //when the component mounts, request all of the dogs and dispatch the list of dogs to redux state
        Dogs.getAllDogs().then(dogs => this.props.dispatch(allDogs(dogs)))
    }

   
  
    renderDogList = () => {
     const dogList = this.props.dogs.map(dog => {
        return {key: dog.name}
      })
      return dogList
    }

    render(){
        return(
            <View style={Styles.container}>
            
                <View style={Styles.doglist}>
                    {
                        this.props.dogs.length > 0 ? //Render a FlatList of DogListItem components
                            <FlatList
                                data={this.renderDogList()}
                                renderItem={({item}) => <DogListItem dispatch={this.props.dispatch} 
                                                                     navigation={this.props.navigation} 
                                                                     name={item.key}/>}
                                                                     //We need to provide this sub component with
                                                                     //navigation sub component 
                            />
                        :
                            <Text>
                                Loading...
                            </Text>
                    }
                </View>
               
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {dogs: state.dogs}
}

export default connect(mapStateToProps)(DogListContainer); 
