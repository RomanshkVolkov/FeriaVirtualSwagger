'use strict';


/**
 * Obtiene una lista de todas las universidades que tengan estado \"APROBADO\" en el sitio web (feriavirtual-upqroo.ozelot.it).
 *
 * returns universidades
 **/
exports.v1UniversidadGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Nombre" : "UNIVERSIDAD POLITÉCNICA DE QUINTANA ROO",
  "area" : "GESTIÓN,INGENIERÍA,GASTRONOMÍA,,NEGOCIOS ADMINISTRACIÓN, TURISMO",
  "Tipo" : "Publica",
  "LICENCIATURA" : 6,
  "Universidad_ID" : 1,
  "Ruta_Escudo" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/logos/1645805846.jpg",
  "MAESTRIA" : 0,
  "BECA" : 1,
  "DOCTORADO" : 0
}, {
  "Nombre" : "UNIVERSIDAD POLITÉCNICA DE QUINTANA ROO",
  "area" : "GESTIÓN,INGENIERÍA,GASTRONOMÍA,,NEGOCIOS ADMINISTRACIÓN, TURISMO",
  "Tipo" : "Publica",
  "LICENCIATURA" : 6,
  "Universidad_ID" : 1,
  "Ruta_Escudo" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/logos/1645805846.jpg",
  "MAESTRIA" : 0,
  "BECA" : 1,
  "DOCTORADO" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener los datos concretos de una universidad por ID
 * Product ID to remove
 *
 * idUniversidad Integer ID de la univeridad por defecto es un int(10) en la base de datos, se pasa como parametro para identificar a la universidad.
 * returns universidadByID
 **/
exports.v1UniversidadIdUniversidadGET = function(idUniversidad) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Nombre" : "UNIVERSIDAD POLITÉCNICA DE QUINTANA ROO",
  "Proceso_Admision" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/admision/1645805767.pdf",
  "Fotos" : [ {
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/Fotos/1646430800.jpg",
    "Titulo" : "INSTALACIONES",
    "Seccion_ID" : 3
  }, {
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/Fotos/1646430800.jpg",
    "Titulo" : "INSTALACIONES",
    "Seccion_ID" : 3
  } ],
  "Becas" : [ {
    "Nombre" : "BECAS INTERNAS",
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/Becas/1646446230.pdf"
  }, {
    "Nombre" : "BECAS INTERNAS",
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/Becas/1646446230.pdf"
  } ],
  "redesSociales" : [ {
    "Red_social" : "FACEBOOK",
    "Recurso" : "https://www.facebook.com/upqroo"
  }, {
    "Red_social" : "FACEBOOK",
    "Recurso" : "https://www.facebook.com/upqroo"
  } ],
  "Ruta_Escudo" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/logos/1645805846.jpg",
  "Videos" : [ {
    "Recurso" : "https://www.youtube.com/watch?v=s9GuRtbE8E4",
    "Titulo" : "VIDEO UPQROO",
    "Seccion_ID" : 1
  }, {
    "Recurso" : "https://www.youtube.com/watch?v=s9GuRtbE8E4",
    "Titulo" : "VIDEO UPQROO",
    "Seccion_ID" : 1
  } ],
  "Correo_Electronico" : "prensaydifusion@upqroo.edu.mx",
  "Tipo" : "Publica",
  "Carreras" : [ {
    "Nombre" : "INGENIERÍA EN SOFTWARE",
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/carreras/1645810165.pdf"
  }, {
    "Nombre" : "INGENIERÍA EN SOFTWARE",
    "Recurso" : "https://feriavirtual-upqroo.ozelot.it/SeccionAdministrativa/docs_Unis/carreras/1645810165.pdf"
  } ],
  "Universidad_ID" : 1,
  "Telefono" : "9982831859",
  "Direccion" : "S/N 1119-33 AV. ARCO BICENTENARIO VISTA REAL II CANCÚN BENITO JU&AACUTE;REZ 77500",
  "url_Maps" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2810608072955!2d-86.90874868517736!3d21.180990987939953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2c0162fb4071%3A0xc881c60dfcc845c!2sUniversidad%20Polit%C3%A9cnica%20de%20Quintana%20Roo!5e0!3m2!1ses-419!2smx!4v1645805240465!5m2!1ses-419!2smx"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

