interface Person{
    firstName: string,
    age: number, 
    isMarried?: boolean,
}

const animal : Record<string, string> ={
    "Dog" : "Tommy",
    "Cat" : "Jimmy"
}


const friend: Partial<Person>= {
    firstName: "Kasun",
}
const friend1: Required<Person>= {
    firstName: "Kasun",
    age: 26,
    isMarried: true,
}

//kamathi ekk thoragnnwa
const fiend2: Pick<Person, "firstName">={
    firstName:"Kasun"
}

//anith serma enwa select krapu ek ain venwa\
const friend3: Omit<Person, "firstName">={
    age:26,
    isMarried: true,
}


//Exclude -> use kranakota one nathi type eka ain kranwa
type Year = number | string | boolean;

const correctYear: Exclude<Year, boolean> = "2020";

//asign karapu value change krann be
const friend4: Readonly<Person> = {
    firstName: "Arjun",
    age: 32,
    isMarried : true,
}