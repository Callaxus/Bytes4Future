const people = [
    { name: "Ana", birthday: "1990-05-12"},
    { name: "Bruno", birthday: "1985-11-23"},
    { name: "Carla", birthday: "2000-01-30"},
    { name: "David", birthday: "1998-07-14"},
    { name: "Eva", birthday: "1995-03-08"}
];


function addAge(ray){
    return ray.map(person => {
        const anoBirth=Number(person.birthday.slice(0,4));
        const idade = 2025 - anoBirth;
        return{...person, age:idade};
    });
}