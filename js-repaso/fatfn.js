function Fn(){
  this.prop = 'propiedad'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn()
console.log(r.__proto__);


const fatFn = () => {
  this.prop = 'lala'
}

const r1 = fatFn()
// console.log(this);

// console.log(r1);


const fnR = () => 2


console.log(fnR());
