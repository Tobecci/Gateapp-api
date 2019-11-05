//This handles the validation of the Adding Estate
//Get the Add Esate Form
const addEstateForm   = document.querySelector('[data-add-estate-form]');
//Get the error field
let estateNameError     = document.querySelector('#estateNameError');
let locationError  = document.querySelector('#locationError');
let imageError     = document.querySelector('[data-img-label]');

//Locations Varialbles
let estateAddress;
let estateCity;
let estateCountry;

const validateForm = (addEstateForm) => {
    //Clear the error field 
    estateNameError.innerHTML    = '';
    locationError.innerHTML = '';
    imageError.classList.remove('image-error-sty')
    imageError.innerHTML    = '';

    estateNamecheck = /^[A-Za-z0-9 ]+$/;

    //Convert form to formData
    const formData = new FormData(addEstateForm);

    //Split locations into Address, City and Country
    const splitLocation = formData.get('location').split(',');
    //Array Destructring
    [estateAddress, estateCity, estateCountry] = splitLocation;

    //Throw error if field is empty
    if(formData.get('estate_name') == '') {
        estateNameError.innerHTML = 'Esate name is required';
        permit = false;
        return false;
    }  
    //Return error if email is invalid
    if(!estateNamecheck.test(formData.get('estate_name'))){
        estateNameError.innerHTML = `Estate name format not allowed(use only alphabetic character's)`;
        permit = false;
        return false;
    }
    //Throw error if field is empty
    if(estateAddress == undefined || estateCity == undefined || estateCountry == undefined) {
        locationError.innerHTML = 'A location of this format (Adress,City,Country) is required';
        permit = false;
        return false;
    }

    //Throw error if field is empty
    if(formData.get('image').name == '') {
        imageError.classList.add('image-error-sty')
        imageError.innerHTML = 'Please choose an estate image';
        permit = false;
        return false;
    }else {
        imageError.style.color = '#49a347';
        imageError.innerHTML = formData.get('image').name;
    }
     //Throw error if image size is too large
     if(formData.get('image').size >= 200000) {
        imageError.classList.add('image-error-sty')
        imageError.innerHTML = 'Too large (Below 2MB)';
        permit = false;
        return false;
    }
    permit = true;

}
addEstateForm.addEventListener('change', () => validateForm(addEstateForm));
//Next the login api found 

