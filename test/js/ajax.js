/*{
		type : get/post
		url : url
		ansyc :   true/false
		data : {}
		success : function()
		error : function()
	}
	
	?"key=value&key=value&key=value"
*/

function Ajax(obj){
	 obj = obj ||{};
	 obj.type = obj.type ||"GET";
	 obj.url = obj.url ||"";
	 obj.ansyc = obj.ansyc ||true;
	 obj.data = obj.data ||null;
	 obj.success = obj.success || function(){};
	 obj.error = obj.error ||function(){};
	 
	 //?"key=value&key=value"
	 var arr =[];
	 for(key in obj.data){
	 	arr.push(key +'='+obj.data.key);
	 }
	 var str = arr.join('&');
	 
	 var xhr = window.XMLHttpRequest() ? new XMLHttpRequest() :new ActiveXObject("Microsoft.XMLHTTP");
	 
	 if(obj.type.toUpperCase()==="GET"){
	 	xhr.open(obj.type,obj.url + "?" + str,obj.ansyc);
	 	xhr.send();
	 	
	 }else if(obj.type.toUpperCase() === "POST"){
	 	xhr.open(obj.type,obj.url,obj.ansyc);
	 	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
	 	xhr.send(str);
	 }
	 
	 xhr.onreadystatechange = function(){
	 	if(xhr.readyState ===4 &&xhr.status===200){
	 		obj.success(xhr.responseText);
	 	}
	 }
}
