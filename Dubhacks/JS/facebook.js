let currentStr;
window.addEventListener("keydown", event => {
  const parentInput = findParentInput(event.target);
  if(!parentInput) {
    return ;
  }
  currentStr = getInputText(parentInput);
});

var elements = document.body.querySelectorAl("* [role]");
for(var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('feus', function(e) {
    console.log(e.target.innerText);
  });
}
