function mostrarPedidos(){
    var TelaPedidos = document.getElementById("tela-pedidos");
    var TelaInicio = document.getElementById("tela-inicio");
    var TelaPerfil = document.getElementById("tela-perfil");
    document.getElementById("destaque-inicio").classList.remove("destaque-menu");
    document.getElementById("destaque-pedidos").classList.add("destaque-menu");
    document.getElementById("destaque-perfil").classList.remove("destaque-menu");
    TelaPedidos.style.display = "block";
    TelaInicio.style.display = "none";
    TelaPerfil.style.display = "none";

}

function mostrarInicio(){
    var TelaPedidos = document.getElementById("tela-pedidos");
    var TelaInicio = document.getElementById("tela-inicio");
    var TelaPerfil = document.getElementById("tela-perfil");
    document.getElementById("destaque-inicio").classList.add("destaque-menu");
    document.getElementById("destaque-pedidos").classList.remove("destaque-menu");
    document.getElementById("destaque-perfil").classList.remove("destaque-menu");
    TelaPedidos.style.display = "none";
    TelaInicio.style.display = "block";
    TelaPerfil.style.display = "none";
}
function mostrarPerfil(){
    var TelaPerfil = document.getElementById("tela-perfil");
    var TelaPedidos = document.getElementById("tela-pedidos");
    var TelaInicio = document.getElementById("tela-inicio");
    document.getElementById("destaque-inicio").classList.remove("destaque-menu");
    document.getElementById("destaque-pedidos").classList.remove("destaque-menu");
    document.getElementById("destaque-perfil").classList.add("destaque-menu");
    TelaInicio.style.display = "none";
    TelaPedidos.style.display = "none";
    TelaPerfil.style.display = "block";
}