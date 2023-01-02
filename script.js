let form = document.querySelector('form');
let pass = document.querySelector('#pass');
let inputs = document.querySelectorAll('input');
let confirm_pass = document.querySelector('#confirm_pass');
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(pass.value == confirm_pass.value)
    {
        alert("Form has been submitted thank you(this is fake)");
        clearAll();
    }
    if(pass.value != confirm_pass.value)
    {
        alert("Error passwords do not match. Please try again.");
        clearPass();
    }
})

function clearAll()
{
    for(let i=0;i<inputs.length;i++)
    {
        inputs[i].value = "";
    }
}

function clearPass()
{
    pass.value = "";
    confirm_pass.value = "";
}