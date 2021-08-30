const Name = document.getElementById( "username" );
const email = document.getElementById( "email" );
const phone = document.getElementById( "phone" );

let Namevali= false;
let emailvali =false; 
let phonevali = false;
Name.addEventListener( 'blur', () => {
    console.log( "name is blurred" );
    // validating name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z\s]){0,20}$/;
    let str = Name.value;
    if ( Name.value.length != 0 ) {


        if ( regex.test( str ) ) {
            console.log( "Your Name is valid" );
            Name.className = "form-control is-valid";
            Namevali= true;
        }
        else {
            console.log( "Your Name is not valid" );
            Name.className = "form-control is-invalid";

        }
    }
    else
    {
        Name.className = "form-control";
    }
} )
email.addEventListener( 'blur', () => {
    console.log( "email is blurred" )
    // validating email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,6}$/;
    let str= email.value;
    if ( email.value.length != 0 ) {


        if ( regex.test( str ) ) {
            console.log( "Your email is valid" );
            email.className = "form-control is-valid";
            emailvali=true;
        }
        else {
            console.log( "Your email is not valid" );
            email.className = "form-control is-invalid";

        }
    }
    else
    {
        email.className = "form-control";
    }

} )
phone.addEventListener( 'blur', () => {
    console.log( "phone is blurred" )
    // validating phone here
    let regex = /^([0-9]){10}$/;
    let str= phone.value;
    if ( phone.value.length != 0 ) {


        if ( regex.test( str ) ) {
            console.log( "Your phone is valid" );
            phone.className = "form-control is-valid";
            phonevali=true;
        }
        else {
            console.log( "Your phone is not valid" );
            phone.className = "form-control is-invalid";

        }
    }
    else
    {
        phone.className = "form-control";
        

    }


} )
let submit=document.getElementById("submit")
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let alert=document.getElementById("alert");
    if(phonevali==true&& emailvali==true && Namevali==true)
    {
        alert.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert" >
        <strong>success!</strong> Your form has been completely submitted.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      console.log("all okk")
    }
    else{
        alert.innerHTML=`  <div class="alert alert-danger alert-dismissible fade show" role="alert" >
        <strong>Failure!</strong> Resolve the errors!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }

})