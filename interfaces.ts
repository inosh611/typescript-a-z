interface Country{
    name: string,
    code: number,
    codeName: string
}
interface Car{
    brand: string,
    model: string,
    year: number,
    country: Country
}



const carObj1: Car = {
    brand: "Toyota",
    model: "BMW",
    year: 2026,
    country: {
        name: "Japan",
        code: 123523,
        codeName: "JP"
    }

}

console.log(carObj1);