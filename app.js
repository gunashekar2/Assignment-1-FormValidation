
 const form = document.getElementById('form');
const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const email =document.getElementById('mail');
const phone = document.getElementById('phone');
const guest = document.getElementById('guests');
const  date = document.getElementById('calender');
const cuisine = document.getElementById('choose');
const radio1 = document.getElementsByName('attending');

const radio_error = document.getElementById('radio_error')
const fname_error = document.getElementById('fname_error');
const lname_error = document.getElementById('lname_error');

const email_error =document.getElementById('mail_error');
const phone_error = document.getElementById('phone_error');
const guest_error = document.getElementById('guests_error');
const calender_error = document.getElementById('calender_error');
const choose_error = document.getElementById('choose_error');

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phoneRegex = /^\d{10}$/;
var dateRegex = /^\d{2}-\d{2}-\d{4}$/;
var guestRegex = /^(100|[1-9][0-9]?)$/;
var nameRegex = /^[a-zA-Z]$/;



form.addEventListener('submit',(e)=>
    {
        if(![...radio1].some(radio => radio.checked)) {
            e.preventDefault();
            radio_error.innerHTML="Required";
        }else{
            radio_error.innerHTML="";
        }
        if(fname.value === '' || fname.value == null) {
            e.preventDefault();
            fname_error.innerHTML = "First Name is Required";
        }else if(fname.value.length <2){
            e.preventDefault();
            fname_error.innerHTML = "enter a valid name";
        }
        else {
            fname_error.innerHTML = "";
        }
       

        if(lname.value === '' || lname.value == null) {
            e.preventDefault();
            lname_error.innerHTML = "Last Name is Required";
        }
        else {
            lname_error.innerHTML = "";
        }
        
        if(email.value === '' || email.value == null) {
            e.preventDefault();
            email_error.innerHTML = "email is Required";
        }else if(!email.value.match(emailRegex))
        {  
            email_error.innerHTML = "Please enter an Valid email addres";

        }
        else {
            email_error.innerHTML = "";
        }


        if(phone.value === '' || phone.value == null) {
            e.preventDefault();
            phone_error.innerHTML = "phone is Required";
        }else if(!phone.value.match(phoneRegex)){
            e.preventDefault();
            phone_error.innerHTML = "Enter a Valid Number";
        }
        else {
            phone_error.innerHTML = "";
        }
    



        
        if(guest.value === '' || guest.value == null) {
            e.preventDefault();
            guest_error.innerHTML = "Guests is Required";
        }else if(guest.value > 100) {
            guest_error.innerHTML = "Bring Guests Lessthan 100";
        }else if (!guest.value.match(guestRegex)){
            guest_error.innerHTML = "Enter Numbers Only";
        }else {
            guest_error.innerHTML = "";
        }

        if(date.value === '' || date.value==null) {
            e.preventDefault();
           calender_error.innerHTML = "Date is Required";
        }else {
            calender_error.innerHTML = "";
        }
        if(cuisine.value === '' || cuisine.value == null) {
            e.preventDefault();
            choose_error.innerHTML = "Cuisine is Required";
        }

}
)
