const formulario = document.getElementById("cp_formulario");
const inputs = document.querySelectorAll("#cp_formulario input");
const textarea = document.querySelectorAll("#cp_formulario textarea");



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ0-9\s]{4,40}$/,
    categoria: /^[a-zA-ZÀ-ÿ0-9\s]{4,40}$/,
    precio: /^[0-9]+(,[0-9]+)?$/, //  
    descuento: /^[0-9]+(,[0-9]+)?$/, //  
    bestSellers: true,
    stock: /^\d{1,14}$/, // 7 a 14 numeros.
    reviews: /^\d{1,14}$/, // 7 a 14 numeros.
    description: /^[a-zA-ZÀ-ÿ0-9\s]{20,500}$/, 
    sliderImage:"",
	
}

const campos = {
	nombre: false,
    categoria: false,
    precio: false,
    descuento: false,
    bestSellers: true,
	  stock: false,
    reviews: false,
    description: false,
    bestSellers: false,
}

const validarCpFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCpCampo(expresiones.nombre, e.target, "nombre");
		break;
        // case "id_category":
        //     validarCpCampo(input.value !== "none", e.input, "categoria");
        // break;  
    case "discount":
			validarCpCampo(expresiones.descuento, e.target, "descuento");
    break;        
		case "price":
			validarCpCampo(expresiones.precio, e.target, "precio");
		break;
    	case "stock":
			validarCpCampo(expresiones.stock, e.target, "stock");
		break;
    case "reviews":
			validarCpCampo(expresiones.reviews, e.target, "reviews");
		break;
		case "description":
			validarCpCampo(expresiones.description, e.target, "description");
		break;
		
	}
}
const validarCpCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`cp_grupo__${campo}`).classList.remove("cp_formulario__grupo-incorrecto");
		document.getElementById(`cp_grupo__${campo}`).classList.add("cp_formulario__grupo-correcto");
		document.querySelector(`#cp_grupo__${campo} i`).classList.add("fa-check-circle");
		document.querySelector(`#cp_grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#cp_grupo__${campo} .cp_formulario__input-error`).classList.remove("cp_formulario__input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`cp_grupo__${campo}`).classList.add('cp_formulario__grupo-incorrecto');
		document.getElementById(`cp_grupo__${campo}`).classList.remove('cp_formulario__grupo-correcto');
		document.querySelector(`#cp_grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#cp_grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#cp_grupo__${campo} .cp_formulario__input-error`).classList.add('cp_formulario__input-error-activo');
		campos[campo] = false;
	}
}


/////////////////Validación de la imagen del Producto////////////////

function fileImageValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        document.querySelector(`.product-photo .cp_formulario__input-error`).classList.add('cp_formulario__input-error-activo');;
        fileInput.value = '';
        return false;
    }else{
        document.querySelector(`.product-photo .cp_formulario__input-error`).classList.remove('cp_formulario__input-error-activo');;
    }
}


///////////////////////////////////////////////////////////////////

inputs.forEach((input) => {
	input.addEventListener("keyup", validarCpFormulario);
	input.addEventListener("blur", validarCpFormulario);
        });


          formulario.addEventListener('submit', (e) => {
            if(campos.nombre && campos.precio && campos.descuento && campos.stock && campos.reviews && selectCategory.selectedIndex !== 0 && selectBestsellers.selectedIndex !== 0){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Registro exitoso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
        
                document.getElementById('cp_formulario__mensaje-exito').classList.add('cp_formulario__mensaje-exito-activo');
                setTimeout(() => {
                    document.getElementById('cp_formulario__mensaje-exito').classList.remove('cp_formulario__mensaje-exito-activo');
                }, 5000);
        
                document.querySelectorAll('.cp_formulario__grupo-correcto').forEach((icono) => {
                    icono.classList.remove('cp_formulario__grupo-correcto');
                });
            } else {
                e.preventDefault();
                document.getElementById('cp_formulario__mensaje').classList.add('cp_formulario__mensaje-activo');
            }
        });