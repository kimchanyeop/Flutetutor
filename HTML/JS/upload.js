function delete_localstorage(){
    list = []
    localStorage.setItem('list', JSON.stringify(list))
    localStorage.setItem('comment_list', JSON.stringify(list))
    upload()
}

function upload() {
    if (localStorage.getItem('list')) {
        list = JSON.parse(localStorage.getItem('list'))
    
    }    
    else{
            list = []
            localStorage.setItem('list', JSON.stringify(list))
            
        }
    var id = Math.floor(Math.random() * 1000000);
    var title = document.getElementById('title').value;
    var recording = document.getElementById('recording').files[0];
    var description = document.getElementById('description').value;
    if (recording == null || title == '' || description == ''){
           alert('please fill in all the component')
        }
    else if (recording.type !== "audio/mpeg") {
        alert('Only mp3 file is allowed to be uploaded')
    }
    else{
    var recordingURL = convertURL(recording);
    list.push({'title':title, 'description':description, 'recording':recordingURL, 'id':id});
    localStorage.setItem('list', JSON.stringify(list))
    alert('successful\r\nPlease open "Give Feedback" page in a new window')

    }
   document.getElementById('title').value = "";
   document.getElementById('description').value = "";
   document.getElementById('recording').value = "";
   
}

function convertURL(a) {
    recordingURL = URL.createObjectURL(a);
    return(recordingURL);

}

