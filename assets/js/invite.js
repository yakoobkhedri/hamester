const link=document.getElementById("link");
function copylink(){
  
   link.select();
   link.setSelectionRange(0,99999);// For mobile devices
   navigator.clipboard.writeText(link.value );


}