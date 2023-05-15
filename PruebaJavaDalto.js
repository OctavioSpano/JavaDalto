
dineroCofla = prompt("¿Cuánta plata tenés?")
//dineroRoberto = prompt("¿Cuánta plata tenés?")
//dineroPedro = prompt("¿Cuánta plata tenés?")
restoAgua = dineroCofla - 160
restoCrema = dineroCofla - 180
restoCuarto = dineroCofla - 200

if (dineroCofla >= 160 && dineroCofla < 180){
    alert("Te alcanza para el helado de agua y te sobra/n $" + restoAgua )
}
else if (dineroCofla >= 180 && dineroCofla < 200){
    alert("Te alcanza para el helado de crema y te sobra/n $" + restoCrema)
}
else if (dineroCofla >= 200){
    alert("Te alcanza para 1/4 kg de helado y te sobra/n $" + restoCuarto)
}
else {
    alert("No te alcanza para ningun helado")
}