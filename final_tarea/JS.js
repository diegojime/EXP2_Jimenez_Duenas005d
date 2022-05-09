//funcion que ve mayor o menor de edad
function MayorMenor()
{
    var a;
    a=document.getElementById('edad1').value;
    if(parseInt(a)>17)
    {
        alert('Puede ingresar correctamente.');
    }
    else
    {
        alert('Usted es menor de edad no puede ingresar al sistema. ');
    }

}
    
