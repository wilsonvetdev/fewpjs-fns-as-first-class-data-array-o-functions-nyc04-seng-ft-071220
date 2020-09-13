function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog,
]

let array_of_functions = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog,
    routine,
]

let return_values = []

function exerciseDog(dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++) {
        let value = routine[i](dogName, dogBreed)
        return_values.push(value)
    }
    return return_values
}






