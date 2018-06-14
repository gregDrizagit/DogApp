function dogApp(state = {
    img_url: '',
    dogs: []
}, action) {

    switch (action.type) {
      case 'SAVE_DOG':
        return{
            ...state, 
            img_url: action.img_url
        }
        case 'ALL_DOGS':
        return{
            ...state, 
            dogs: action.dogs
        }
        case 'VIEW_DOG':
        return{
            ...state, 
            viewDog: action.viewDog
        }
      default:
        return state
    }
}
export default dogApp