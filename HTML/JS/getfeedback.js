window.onload = getFeedback()

function getFeedback() {
    list = JSON.parse(localStorage.getItem('list'));
    
    for (i=0;i<list.length;i++){

        create(list[i].title,list[i].description, list[i].recording, list[i].id);
    }
    if (check_comment() !== undefined) {
        comment_list = JSON.parse(localStorage.getItem('comment_list'));
        console.log(comment_list)
        for (i=0;i<comment_list.length;i++){
            var div = document.getElementById(comment_list[i].id);
            var p = document.createElement('p');    
            date = new Date()
            p.innerHTML = date + "<br> <p>"+ comment_list[i].comment +"</p> <br>"
            p.setAttribute('class', 'wh')
            div.append(p)
        }
    }    
    else {
        comment_list = []
        localStorage.setItem('comment_list', JSON.stringify(comment_list))
    }
}

function check_comment() {
    if (localStorage.getItem('comment_list') == undefined) {
            return undefined
        }
    else {
        return 'defined'
    }
} 

function create(a, b, c, d) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", d);
    newdiv.setAttribute("class", "dk");
    var parentdiv = document.getElementById('area');
    parentdiv.append(newdiv);
    var div = document.getElementById(d);
    div.innerHTML = '<h2 class="wh">'+ a +'</h2>' + '<p class="wh">' + b + '</p> <br> <audio controls onerror="remove(this)" src="' + c + '"></audio> <br> <label class="wh"> Comment: <textarea class="no" cols="30" rows="8"></textarea></label> <button onclick="comment(this)" class="no wide">submit</button>';
    parentdiv.appendChild(document.createElement('hr'));
}



function comment(a) {
    if (check_comment() !== undefined) {
        comment_list = JSON.parse(localStorage.getItem('comment_list'));
        }
    else{
        comment_list = []
        localStorage.setItem('comment_list', comment_list)
}
    var id  = a.parentElement.id;
    var div = document.getElementById(id);
    var comment = div.children[5].children[0].value;
    comment_list.push({'id':id,'comment':comment});
    localStorage.setItem('comment_list', JSON.stringify(comment_list));
    location.reload()
}

function remove(a) {
    for (i=0;i<list.length;i++){
        if (list[i].recording == a.src){
            delete list[i];
            localStorage.setItem('list', list);
        }    
    }
    location.reload()
}