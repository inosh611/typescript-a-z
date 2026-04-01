

function myCar<N, S>(year: N, brand: S): [N, S]{
    return [year , brand];
}

console.log(myCar<number, string>(2012, "bmw"));