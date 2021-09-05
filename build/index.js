
let root = document.getElementById('root');

$('#modalLogin').modal('show');

document.getElementById('btnLoginIngresar').addEventListener('click',()=>{
    $('#modalLogin').modal('hide');
});

initViewVentas();