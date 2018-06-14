import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    FlatList, 
    View
  } from 'react-native';
  import Styles from '../Styles'
  import {connect} from 'react-redux'
  import Dogs from '../api/dogs'

class DogProfileScreen extends React.Component{

    state = {}

    componentDidMount(){
        Dogs.getDog(this.props.dog).then(resp => this.setState({dog: resp}))
    }

    render(){
        
        return(
            <View style={Styles.container}>
            {
                this.state.dog ?
                <View>
                    <View style={Styles.dogImage}>
                         <Text style={{fontSize:40}}>{this.state.dog.name}</Text>

                        <Image 
                            source={{uri: this.state.dog.img_url}}
                            style={{width: 300, height: 300}}
                        />

                    </View>
                </View>
                :
                <Text>Loading...</Text>
            }
            </View>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {dog: state.viewDog}
}
export default connect(mapStateToProps)(DogProfileScreen)