function postFunction(){
    var postString = document.getElementById("text1").value;

        if (topic1.childNodes.length === 0) {
            document.getElementById("topic1").innerHTML = postString;
        }
        else if (comment1.childNodes.length === 0) {
            document.getElementById("comment1").innerHTML = "comment #1: " + postString;
        }
        else if (comment2.childNodes.length === 0)  {
            document.getElementById("comment2").innerHTML = "comment #2: " + postString;
        }
        
    //var postString = document.getElementById("text1").value;
    //alert(postString);
    //document.getElementById("topic1").innerHTML = postString;
}

function clearFunction(){
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}