/* class Persona{
     constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        }

        saludar(){
            console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }

}


let persona = new Persona('Daniel', 26);

persona.saludar(); */



//Metodo Estatico

/*  class Persona{
    constructor(nombre, edad){
       this.nombre = nombre;
       this.edad = edad;
       }

       saludar(){
           console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
       }

       static definicion(){
           console.log("Una persona es un ser humano");
       }
}

Persona.definicion(); */


//Clases y Herencias

/* class Persona{
    constructor(nombre, edad){
       this.nombre = nombre;
       this.edad = edad;
       }

       saludar(){
           console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
       }

       static definicion(){
           console.log("Una persona es un ser humano");
       }
}

class Desarrollador extends Persona{

}

Desarrollador.definicion(); */


//Otro ejemplo

/* class Persona{
    constructor(nombre, edad){
       this.nombre = nombre;
       this.edad = edad;
       }

       saludar(){
           console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
       }

       static definicion(){
           console.log("Una persona es un ser humano");
       }
}

class Desarrollador extends Persona{
      saludoDesarrollador(){
        this.saludar();
        console.log("Soy un estudiante de Software");
      }
}

let desarrollador = new Desarrollador('Daniel', 26);

desarrollador.saludoDesarrollador(); */


//Palabra reservada SUPER

class Persona{
    constructor(nombre, edad){
       this.nombre = nombre;
       this.edad = edad;
       }

       saludar(){
           console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
       }

       static definicion(){
           console.log("Una persona es un ser humano");
       }
}

class Desarrollador extends Persona{

      constructor (nombre, edad, tipo){
        super(nombre, edad);
        this.tipo = tipo;
      }

      saludoDesarrollador(){
        this.saludar();
        console.log(`Soy un ${this.tipo} Developer`);
      }
}

let desarrollador = new Desarrollador('Daniel', 26, 'Frontend');

desarrollador.saludoDesarrollador();