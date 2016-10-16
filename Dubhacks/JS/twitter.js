console.log("loaded twitter.js");

var findParentInput = function(target) {
  console.log("Got target", target);
  var child = target.children[0];
  console.log(child.textContent);
}

var getInputText = function(parentInput) {
  console.log(parentInput.innerHTML);
}

let currentStr;
document.body.addEventListener("keydown", function() {
  const parentInput = findParentInput(event.target);
  if(!parentInput) {
    return ;
  }
  currentStr = getInputText(parentInput);
});

console.log("running");
