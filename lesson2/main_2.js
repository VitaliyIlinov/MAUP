<!-- встроенные обьекты есть! -->


function clock(idp) {
    alert('2342');
    var d = new Date();
    var str;
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    str = h + ":" + m + ":" + s;
    //console.log(str);
    document.getElementById(idp).innerHTML = str;
    setTimeout(clock, 1000, idp);
}

function showHide(id) {
    if (document.getElementById(id).style.display == '' || document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = "block";
    }
    else {
        document.getElementById(id).style.display = "none"
    }
}


function calc(target) {
    var tg = target;
    var act = tg.value;
    if (tg.id === 'eqv') {
        ShowNumbers.value = eval(ShowNumbers.value);
        return;
    }
    if (act != null && tg.id != "ShowNumbers") {
        ShowNumbers.value += act;
    }
}
function calcKey(ev) {
    //alert('rdgdfd');
    event.preventDefault();
    var cod=event.charCode || event.keyCode;
    if(cod==40 || cod==41 || cod==43 || cod>47 && cod<58){

        var s=String.fromCharCode(cod);
        ShowNumbers.value=ShowNumbers.value+s;
    }
    //alert(cod);
    if(cod==13){
        ShowNumbers.value=eval(ShowNumbers.value);
    }
}
