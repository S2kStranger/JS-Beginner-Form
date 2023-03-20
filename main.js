const form =document.getElementById('my-form');
form.addEventListener('submit',saveData);
function saveData(e)
{
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    if(name=="" || email=="")
    {
        alert("Please enter valid values.");
    }
    else
    {
        /*
        // save data as string in local storage
       localStorage.setItem('Name',name);
       localStorage.setItem('Email',email);
       */

       //Save data as an object in local storage
       const myObj={
        name: name,
        email: email
       };

       let myObj_serialized=JSON.stringify(myObj);
       localStorage.setItem("MyObj",myObj_serialized);
    }
}