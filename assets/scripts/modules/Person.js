function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

module.exports = Person;