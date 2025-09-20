/***
 * This is an example of a TypeScript file.
 */
function sumar(a:number , b:number) {
    return a+b+" hola";
}
console.log(sumar(1,2));

const sumar2 = (n1:number, n2:number):number => {
    return n1+n2;
}

console.log(sumar2(3,4));

export {};