export const validationDictionary = {
    bool: {
      inclusion: {
        within: [true],
        message: '^Campo requerido',
      },
    },

    name:{
        presence: {
            allowEmpty: false,
            message: '^Campo Requerido',
          },
         format:
         {
             pattern:  /^[a-zA-Z]+$/,
             message: '^Ingrese nombre válido',
         },
         length: {
            minimum: 2,
            maximum: 20,
            message: '^Nombre no cumple con el número de caracteres necesarios',
          },
    },

    lastname:{
        presence: {
            allowEmpty: false,
            message: '^Campo Requerido',
          },
         format:
         {
             pattern:  /^[a-zA-Z]+$/,
             message: '^Ingrese apellido válido',
         },
         length: {
            minimum: 2,
            maximum: 20,
            message: '^Apellido no cumple con el número de caracteres necesarios',
          },
    },

    age: {
        presence: {
          allowEmpty: false,
          message: '^Campo requerido',
        },
        format:{
            pattern: /^[0-9]*$/,
            message: "^Ingrese edad válida"
        },
        
        numericality: {
            greaterThan: 12,
            lessThan: 150,
            message: '^Ingrese edad válida',
          },
      },
    
    email: {
      presence: {
        allowEmpty: false,
        message: '^Campo requerido',
      },
      email: {
        message: '^Ingrese correo electrónico válido',
      },
      exclusion: {
        within:  ["anamariauribee1@gmail.com", "cristinaranoe@gmail.com", "mateoartegagiraldo@gmail.com"],
        message: "^Correo electrónico ya está registrado"
      },
      length: {
        maximum: 30,
        message: '^Correo electrónico supera el número de caracteres permitidos',
      },
    },

    
  
    password: {
      presence: {
        allowEmpty: false,
        message: '^Campo requerido',
      },
      format:{
        pattern: /^[a-zA-Z0-9]*$/,
        message: "^Contraseña contiene caracteres inválidos"
    },
      length: {
        minimum: 6,
        maximum: 15,
        message: '^Contraseña no cumple con el número de caracteres necesarios',
      },
    },

    codigo: {
      presence: {
        allowEmpty: false,
        message: '^Campo requerido',
      },
      format:{
        pattern: /^[0-9]*$/,
        message: "^Código contiene caracteres inválidos"
    },
      length: {
        minimum: 3,
        maximum:3,
        message: "^Código inválido"
      },
      inclusion: {
        within: ["123", "456","789"],
         message: '^Código inválido',
       },
    },

  
    };