function updateRecommendedIP(json){
    j = JSON.parse(j);
    
    if (j.length > 0){
        var h = document.getElementById('hardcodedip');
        if (h != j[0]){
            document.getElementById('recommendedip').innerHTML = j[0];
            document.getElementById('recommendedip2').innerHTML = j[0];
        }
    }
}






function fetchPage(url,callback,errcallback){
    var xmlhttp;
    if (window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{
        // code for IE6, IE5 (why am I still supporting these? Die... Die.... Die....
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4){
     if(xmlhttp.status==200){
            callback(xmlhttp.responseText)
        }else{
            errcallback(xmlhttp.responseText)
        }
   
} }

    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
