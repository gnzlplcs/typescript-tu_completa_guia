# tipos de datos

## primitivos

+ string: `'Maria'`, `"Maria"`
+ number: `25`, `155.432`
+ boolean: `isActive = true`, `keepAlive = false`
+ `null` y `undefined` también se puede considerar un tipo de dato. `null` es cuando un valor es tipo nulo, y `undefined` es cuando aún no se le ha asignado un valor a alguna variable, o cuando una función no retorna nada.
+ symbol: los `symbol` se usan cuando, por ejemplo, dentro de un objeto se necesita tener una propiedad garantizada que sea única, que apunte a un espacio de memoria diferente `sym = Symbol()`.

## compuestos

+ objetos literales: objeto con pares de valores, puede contener datos de cualquier tipo

  ```js
    const obj = {
      name: 'Gonzalo',
      age: 39,
      isAlive: true
    }
  ```

+ funciones: funciones tradicionales y funciones flecha.
+ clases: las clases no permiten saber cómo luce sus valores

  ```js
    class Person = {
      name;
      age;
    }
  ```

+ arreglos

## otros tipos

TS permite crear otros tipos de datos: tuplas, genéricos, interfaces.

## documentación oficial sobre tipos de datos

> [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
