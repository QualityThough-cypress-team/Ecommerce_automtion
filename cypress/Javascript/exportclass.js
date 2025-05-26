class fruits{
    constructor(name, color, taste) {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }
    getFruitDetails() {
        return `The fruit is ${this.name}, its color is ${this.color}, and it tastes ${this.taste}.`;
    }   
}
export default fruits; // Exporting the fruits class as default
//import fruits from "./exportclass.js"; // Importing the fruits class from exportclass.js file
