function change(a){
        document.getElementById("pdf").src = a;
}

function drop() {
    i = document.getElementById('etudes');
    i.classList.toggle('show');
    a = document.getElementById('arrow');
    x = a.src.split('/');
    if(x[x.length -1] == 'down-arrow.png') {
        a.src = '../Media/up-arrow.png';
    }
    else {
        a.src = '../Media/down-arrow.png';
    }
}
