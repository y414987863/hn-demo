setInterval(function(){
  var myDate = new Date();
  document.getElementById('id1').innerText=myDate.getSeconds();
},500)