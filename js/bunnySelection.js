$(function(){
   $("#btnUserBunnies").click(getBunniesFromUser); 
})

function getBunniesFromUser(){
    let user = $("#username").val();
    $.get(`http://localhost:1234/selectbunny/${user}`, (result) => {
        console.log(result);
    });
}