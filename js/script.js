function alertDisclaimer(){
    var target = document.getElementById("disclaimer");
    var currentValue = target.innerHTML;
    alert(currentValue);
}

window.onload = function(){
    alertDisclaimer();
}