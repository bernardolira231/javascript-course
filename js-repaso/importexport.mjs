const chanchosFelices = ['chancho1', 'chancho2', 'chancho3']
const chanchosTristes = ['trisite1', 'triste2']
const otrosChanchos = []

// module.exports = {
//   chanchosFelices,
//   chanchosTristes
// }

const fn1 = () => {
  console.log('soy la funcion 1');
}

function fn2(){
  console.log('soy la funcion 2');
}

export { chanchosTristes, otrosChanchos, fn1, fn2 }
export default chanchosFelices
