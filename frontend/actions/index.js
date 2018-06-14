export const saveDog = url => ({
    type: 'SAVE_DOG',
    img_url:url
  })

export const allDogs = dogs => ({
    type: 'ALL_DOGS',
    dogs:dogs
})

export const viewDog = dog => ({
    type: "VIEW_DOG", 
    viewDog: dog
})
  