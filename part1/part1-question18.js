let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCaras: 2
};

for (const prop in statistics) {
    if(prop.substring(0,1) == "r" || (statistics[prop] % 2 == 1)) {
        console.log(`${property}: ${object[property]}`);
    }
}