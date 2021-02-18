const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// console.warn('Not o la negación')
// console.log(`!true: ${!true}`); // false
// console.log(`!false: ${!false}`); // true

// console.log(`!regresaTrue(): ${!regresaTrue()}`);
// console.log(`!regresaFalse(): ${!regresaFalse()}`);

// console.warn('And: &&');
//Todas las condiciones deben regresar true para que la condición se cumpla
// console.log(`false && false: ${false && false}`);
// console.log(`true && true: ${true && true}`);
// console.log(`false && true: ${false && true}`);


// Cuando detecta alguna instrucción que es falsa retorna
// false inmediatamente y no continúa evaluando la condición
// console.log(regresaTrue() && regresaFalse() && regresaTrue());

// regresaFalse() && regresaTrue()

// console.warn('OR: ||');
// console.log(true || false);

// console.log(regresaFalse() || regresaTrue());


const soyUndefined = undefined,
    soyNull = null,
    soyFalse = false,
    a1 = false && 'hola mundo' && 150,
    a2 = 'Hola' && 'mundo' && soyFalse && true,
    a3 = 'Hola' || soyUndefined || soyNull || 'Ya no soy falso' || soyFalse;

// console.log(a3);

let imprimir = (arg = 'Hola' || soyUndefined || soyNull || 10) =>{
    console.log({arg});
}

imprimir(20)








