document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#btn-submit").onclick = function(){ set_user() }

    function set_user(){
        let name = document.querySelector("#user_input").value
        if( name === ""){
            alert("You must enter a name!")
        }
        else{
            localStorage.setItem("user", name)
            document.querySelector('.box').style.animationPlayState = 'running'
            document.querySelector('.box').addEventListener('animationend', () => {
                window.location.assign("/channels")
            })
        }
    }
})