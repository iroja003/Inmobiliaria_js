// Objeto : propiedades
const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  // declaracion de constantes 

  const btnFind         = document.getElementById("btnFind");
  const idTotalProp     = document.getElementById("idTotalProp");
  idTotalProp.innerHTML = propiedades.length;
  const listaProp       = document.querySelector(".propiedades");
  
// declaracion de varibales
  let tmpProp ="";
  let clean = () => (listaProp.innerHTML="");
  // Filtro : Objetivo buscar las propiedades que complen con los parametros de metraje y cantidad de cuartos
 const filtro = function (prop = propiedades) {
     clean();
     for ( let tipocasa of prop){
       tmpProp= `<div class="propiedad">
       <div class="img" style="background-image: url('${tipocasa.src}'")></div>
       <section>
           <h5>${tipocasa.name}</h5>
           <div class="d-flex justify-content-between">
               <p>Cuartos: ${tipocasa.rooms}</p>
               <p>Metros: ${tipocasa.m}</p>
           </div>
           <p class="my-3">${tipocasa.descripcion}</p>
           <button class="btn btn-info ">Ver más</button>
       </section>
   </div>
   `;
    listaProp.innerHTML += tmpProp;
   }
  };
    
  // BOTON bUSCAR
  btnFind.addEventListener("click", function() {
   let rooms  = document.getElementById("rooms").value;  
   let idfrom = document.getElementById("idfrom").value;  
   let idto   = document.getElementById("idto").value;  

   if ( rooms !="" || idfrom !="" || idto != "") {
      const encontradas = propiedades.filter( tipocasa => tipocasa.rooms >= rooms && tipocasa.m >= idfrom && tipocasa.m <= idto);
      filtro(encontradas);
      idTotalProp.innerHTML = encontradas.length;
      }
       else {
          alert("Los parametros de busqueda no deben estar vacios") ;   
    }
  });

  filtro();


