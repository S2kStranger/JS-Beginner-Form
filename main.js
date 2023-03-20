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
       localStorage.setItem('Name',name);
       localStorage.setItem('Email',email);
    }
}