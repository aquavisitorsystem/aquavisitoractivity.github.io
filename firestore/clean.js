setTimeout(clean,2000);
function clean(){
  for (let element of document.getElementsByClassName("test pass fast")){
   element.style.display="none";
}
}

