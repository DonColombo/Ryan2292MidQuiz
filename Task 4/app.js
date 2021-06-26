function Arrayfunc() {
    var movies = ['Willys Wonderland', 'Bill and Teds Excellent Adventure', 'My Spy', 'Waynes World', 'Waynes World 2'];

    if (movies[3].charAt(0) == 'I') {
        console.log("yay");
    }else{
        console.log("Nay");
    }

    var movies = [];

    var movies = ['Willys Wonderland', 'Bill and Teds Excellent Adventure', 'My Spy'];

    movies.push('iron man');

    console.log(movies);
}

function ObjectFunc() {
    var Car = {
        model: 'Ranger',
        color: 'White',
        price: '45',
    };
    
    if(Car.price > 50) {
        console.log("Expensive");
    }else{
        console.log("Affordable");
    }
    
    console.log(Car.color);
}

Arrayfunc();
ObjectFunc();