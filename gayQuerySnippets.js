function insertVersion(data){
    document.getElementById('version').innerHTML = (data);
}
var localVersion = [0,0,0];
var updatePATH = "https://raw.githubusercontent.com/osmitadores/myth-app/master/version.myth";
$.get(updatePATH, insertVersion);

var lastVersion = document.getElementById('version').innerHTML;

if(lastVersion === ''){
    noConnect();
}else{
    checkUpdate();
}

function noConnect(){
    alert("sem conexão!")
    window.location.replace("noconnect.html");
}

function checkUpdate(){
    lastVersion = lastVersion.split(".");
    for(var i in lastVersion){
        lastVersion[i] = parseInt(lastVersion[i]);
    }
    if(atualVersion[0] < lastVersion[0]){
        alert('nova versão maior disponivel');
    }else if (atualVersion[1] < lastVersion[1]){
        alert('nova versão menor disponivel');
    }else if (atualVersion[2] < lastVersion[2]){
        alert('nova versão ajuste disponivel');
    }else{
        alert('atualizado');
    }
}
