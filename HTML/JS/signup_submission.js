window.onload = function() {
    params = new URLSearchParams(location.search);
    document.getElementById("username").innerText = params.get("name");
    document.getElementById("useremail").innerText = params.get("email");

}