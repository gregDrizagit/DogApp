import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 20,
      paddingTop: 50
    },
    dogImage: {
      flex:1,
      justifyContent:"flex-start", 
      alignItems: 'center'
    },
    breedPicker: {
       flex:1, 
       alignItems:'center',
       paddingTop:150
    },
    dogPickerContainer:{
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingTop:10
    },
    doglist:{
      flex:1,
      alignItems: 'center',
      paddingTop:40
    },
    dogitem:{
      padding:5
    },
    instructions: {
      flex:1, 
      textAlign: 'center',
      alignItems: 'center',
      color: '#333333',
      marginBottom: 0,
    },
  });

  export default Styles
  