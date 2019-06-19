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



// Load content from a domain that only resolves via my service
function checkifserviceinuse(){
	// Disabled for now as it won't work until I get a cert for that domain
	// Can't do that with LetsEncrypt as the name (by design) only resolves via my servers
	return;
	i = document.createElement('img');
	i.addEventListener('error',testimgnoload);
        i.addEventListener('load',testimgloaded);
	i.setAttribute('src','https://dnstest.dns.bentasker.co.uk/img.png');
	i.style.display = 'none';
	i.id = 'testimg';
	var si = document.getElementById('serviceinuse');
	if (si){
		si.appendChild(i);
	}
}


function testimgnoload(){
	console.log("No Load");
	var d = document.createElement('div');
	d.innerHTML = 'You are not currently using my DNS service';
	d.className = 'serviceNotInUse';
        var si = document.getElementById('serviceinuse');
        if (si){
                si.appendChild(d);
        }
}

function testimgloaded(){
        var d = document.createElement('div');
        d.innerHTML = 'You are currently using my DNS service';
        d.className = 'serviceInUse';
        var si = document.getElementById('serviceinuse');
        if (si){
                si.appendChild(d);
        }
}
