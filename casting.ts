const brand: string = "Honda";

const year = "2020";

const numericYear: number = ( year as unknown) as number;
// const numericYear: number = <number><unknown>year;
console.log(numericYear); 