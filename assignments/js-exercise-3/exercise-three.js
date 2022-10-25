/**
 * Generates a random number from 1-20 inclusive
 * @returns {Number} random number from 1-20 inclusive
 */
const generateNum = () => {
    const randomDecimal = Math.random() * 20; //Generates number from [0-20)
    //Need to take the floor so that we get integers
    //Need to add 1 so that we end up with 1-20 instead of 0-19
    return Math.floor(randomDecimal) + 1;
}

/**
 * Generates a random color out of 6 options.
 * @returns {string} color
 */
const generateColor = () => {
    //Generate a random number
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    //Write a switch for returning the color
    switch (randomNumber) {
        case 1:
            return 'red';
        case 2:
            return 'orange';
        case 3:
            return 'yellow';
        case 4:
            return 'green';
        case 5:
            return 'blue';
        case 6:
            return 'purple';
    }
}

/**
 * Creates a car
 * @param {*} productionRun 
 * @returns {Object} car object with random color and given productionRun.
 */
const makeCar = (productionRun) => {
    const color = generateColor();

    //Object literal to define the object. Check out the "advanced" branch for a slightly cleaner solution
    const car = {
        color: color,
        productionRun: productionRun
    };

    return car;
}

/**
 * Creates the given number of cars
 * @param {Number} quantity number of cars to create
 * @param {*} productionRun
 * 
 * @returns {Object []} Array of car objects
 */
const constructCars = (quantity, productionRun) => {
    const cars = [];

    for(let i = 0; i < quantity; i++) {
        const car = makeCar(productionRun);
        cars.push(car);
    }

    return cars;
}

/**
 * Logs each car to the console
 * @param {Object []} cars Array of car objects
 */
const displayAllCars = (cars) => {
    for(const car of cars) {
        console.log(car);
    }
}

/**
 * Logs a count of cars with each color
 * @param {Object []} cars Array of car objects
 */
const colorCount = (cars) => {
    /*
    This approach is known as "hard-coding". Anytime you hard code variables, you are limiting
    the flexibility of an application. In this case, what would happen if you changed out the
    color options from your generateColor function? You would have to update this function as
    well. This creates for a "brittle" application.

    This approach works in this context, but a much better solution can be found on the 
    "advanced" branch.
    */

    //Instantiate color counts to 0
    let redCount = 0;
    let orangeCount = 0;
    let yellowCount = 0;
    let greenCount = 0;
    let blueCount = 0;
    let purpleCount = 0;

    for(const car of cars) {
        //When we find a color match, increment the appropriate variable
        switch(car.color) {
            case 'red':
                redCount++;
                break;
            case 'orange':
                orangeCount++;
                break;
            case 'yellow':
                yellowCount++;
                break;
            case 'green':
                greenCount++;
                break;
            case 'blue':
                blueCount++;
                break;
            case 'purple':
                purpleCount++;
                break;
            default:
                console.log(`Could not count car with ${car.color} color`);
        }
    }

    //log out all of the results.
    console.log(`There were ${redCount} red cars in the array.`);
    console.log(`There were ${orangeCount} orange cars in the array.`);
    console.log(`There were ${yellowCount} yellow cars in the array.`);
    console.log(`There were ${greenCount} green cars in the array.`);
    console.log(`There were ${blueCount} blue cars in the array.`);
    console.log(`There were ${purpleCount} purple cars in the array.`);
}