import React from 'react'
import Styles from '../Styles'
import {connect} from 'react-redux'
import {saveDog, allDogs} from '../actions'
import {
    StyleSheet,
    Text,
    Image,
    Button,
    PickerIOS, 
    View
  } from 'react-native';

  import Dogs from '../api/dogs'//I keep all of the network requests in api/dogs


class DogViewScreen extends React.Component{

    state = {selectedBreed: ""}

    onButtonPress = () => {
        Dogs.getRandomDogPic(this.state.selectedBreed).then(dog => this.setState({dogImage: dog.message}))
    }

    flattenBreedList = (breedList) => {
        /* 
            So this function is probably the most sophisticated part of this app haha. 
            
            The Dogs API allows us to request a random dog picture by breed. 
            The API sends back a data structure that looks like this:

            {
                "dhole": [],
                "dingo": [],
                "doberman": [],
                "elkhound": [
                    "norwegian"
                ],
                "entlebucher": [],
                "eskimo": [],
                "germanshepherd": [],
                "greyhound": [
                    "italian"
                ],
                "groenendael": [],
                "hound": [
                    "afghan",
                    "basset",
                    "blood",
                    "english",
                    "ibizan",
                    "walker"
                ]
            }

            So each key is a breed, some breeds have an array of sub breeds. 
            
            the api structures sub breed requests like this - https://dog.ceo/api/breed/greyhound-italian/images/random
            with breed-subbreed (greyhound-italian). We need to display the sub breeds like (italian greyhound)

            This method pareses this data structure and returns an array of PickerIOS.item objects we can provide to the
            Picker object. 
        */
        let breedListItems = Object.keys(breedList).map(breed => {//we pass in the breed list. Map over each breed
            //if the breed has items in the sub breed array 
            if(breedList[breed].length > 0){ 
                for(let i = 0; i < breedList[breed].length; i++) { //loop over the sub breed array
                    //return PickerIOS.Items with the correct format 
                    return (<PickerIOS.Item key={breed} label={`${breedList[breed][i]} ${breed}`}  value={`${breed}-${breedList[breed][i]}`}/>)
                }
            }else{
                //else if there isn't any sub breeds just provide PickerIOS.item with the key
                return (<PickerIOS.Item key={breed} label={breed} value={breed} />)
            }

        })
        //once we have the array of breedPickerItems, we set the list in local state
        this.setState({breedPickerItems: breedListItems})
    }

    saveDog = () => {
        this.props.dispatch(saveDog(this.state.dogImage)) //dispatch the dog image url
        this.props.navigation.navigate('SaveDog')//navigate to the SaveDogView
    }

    renderPicker = () => {
        //render PickerIOS is the container for the PickerIOS.Items that we put together above
        
        return(
            <PickerIOS
                selectedValue={this.state.selectedBreed} //provide the currently selected item as the value to create controlled component
                style={{ height: 70, width: 200 }}//when the value changes, set the value in local state
                onValueChange={(itemValue, itemIndex) => this.setState({selectedBreed: itemValue})}> 
                {
                    this.state.breedPickerItems //drop the breedPickerItems from state in the picker
                }
            </PickerIOS>
        )
    }

    componentDidMount(){

        //when the component mounts, we fetch the entire list of breeds, and pass that list into 
        //flattenBreedList
        Dogs.getBreedList().then(breedList => this.flattenBreedList(breedList.message)) 
        this.onButtonPress()//we also get an initial dog 
    }

    render(){
        return(
            <View style={Styles.dogPickerContainer}>
                {
                    this.state.dogImage ? //if a dog image is in state, render the image in state
                    <View style={Styles.dogImage}>
                        <Image 
                            source={{uri: this.state.dogImage}}
                            style={{width: 300, height: 300}}
                        />
                        {
                            this.state.selectedBreed !== "" ?//render the selected breed if a breed is selected
                            <View>
                                <Text>Random {this.state.selectedBreed}</Text>
                            </View>
                            :
                            <Text>Random Dog</Text>
                        }

                    </View>
                    :
                    <View>
                        <Text>
                            Please Press button to see a dog.
                        </Text>
                    </View>
                }
                <View style={Styles.breedPicker}>
                {
                    this.state.breedPickerItems ? //render the picker if flattenBreedList set the pickerItems in local state
                       this.renderPicker()
                    :
                        null
                }
                </View>
                <Button title={"Save Dog"} onPress={this.saveDog} />
                {/*Render the buttons to link to the page where we name and save dog */}
                <Button title="See a random dog" onPress={this.onButtonPress} />
                {/*Render the button to pick a random dog of a random breed, or if a breed is selected, select a random dog of that breed*/}

            </View>
        )
    }
}


export default connect()(DogViewScreen) // I connect this component to redux not to have access to state,
                                        // but to get acces to .dispatch in props. We dispatch the dog image url we want to save. 

