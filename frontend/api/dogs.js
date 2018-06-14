class Dogs{

    static getAllDogs(){
        return fetch('http:/localhost:3000/dogs').then(resp => resp.json())
    }

    static getDog(name){
        return fetch(`http:/localhost:3000/dogs/${name}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method:'GET'
        }).then(resp => resp.json())
    }
    

    static postNewDog(dogName, img_url){
        return fetch('http:/localhost:3000/dog', {
            headers:{
            'Content-Type': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify({name: dogName, img_url: img_url})
        }).then(resp => resp.json())
    }

    static getRandomDogPic(breed){
        if(breed === ""){
            console.log('no breed selected')
            return fetch('https://dog.ceo/api/breeds/image/random').then(resp => resp.json())
        }else{
            console.log('selected breed')
            return fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(resp => resp.json())
        }
    }

    static getBreedList(breed){
        return fetch('https://dog.ceo/api/breeds/list/all').then(resp => resp.json())
    }
}

export default Dogs