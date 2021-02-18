class Rectangulo {
    static area = 0;
    constructor({
        base = 0,
        altura = 0
    }) {
        this.base = base;
        this.altura = altura;
        this.area = base * altura;
    }
}

const rectangulo = new Rectangulo({
    base: 10,
    altura: 15
})
rectangulo.area = 100
console.log(Rectangulo.area);
console.log(rectangulo);