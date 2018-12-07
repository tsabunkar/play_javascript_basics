function showName(firstName, lastName) {

    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    var nameIntro = "My name is ";

    return makeFullName();


}
console.log(showName("Sachin", "Tendulkar"));