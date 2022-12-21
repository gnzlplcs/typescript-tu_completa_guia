(() => {

  const a: number = 10; // TS reconoce esta variable como 10, porque es const
  let b = 10; // TS reconoce esta variable como number, porque es let y podría variar

  b = 3.1416

  // si no le asigno el tipo de variable a let, este podría recibir una asignación de cualquier tipo

  // solución
  let c: string;

  function sayHello( msg: object ) {
    console.log(msg)
  }
})()
