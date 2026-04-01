function myCar1(brand: string, year: number | string): string{

    return brand + " "+ year;
}

function calCulator(...rest: number[]): number{
    
    let total: number = 0;
    rest.forEach((num)=>{
        total += num;
    });
    return total;
}

console.log(myCar1("BMW", 2020));
console.log(calCulator(456+100));