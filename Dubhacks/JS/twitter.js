console.log("loaded twitter.js");

var findParentInput = function(target) {
  console.log("Got target", target);
  var child = target.children[0];
  console.log(child.textContent);

  var requestUrl = "https://language.googleapis.com/v1beta1/documents:analyzeSentiment?key=AIzaSyDvQ9hq2wcm6rzob0Sev4vMCZH30S3-5II";

  $.post(requestUrl, {
     "type": "PLAIN_TEXT",
     "content": child.textContent,
     "encodingType": "UTF8"
  })
  // var options = {
  //    url: requestUrl,
  //    type: "POST",
  //    data: {
  //       "document": {
  //           "type": "PLAIN_TEXT",
  //           "content": child.textContent,
  //       },
  //       "encodingType": "UTF8"
  //    },
  //    contentType:"text/plain; charset=utf-8",
  //    success: function(err, resp, body) {
  //     if (!err && resp.statusCode == 200) {
  //       console.log(body.sentiments);
  //        //  var entities = body.entities;
  //        //  for (index in entities) {
  //        //      var entity = entities[index];
  //        //      console.log(entity);
  //        //  }
  //     } else {
  //         console.log("NL API error: ", err);
  //     }
  //   }
  // }
  // $.ajax(options);
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

// console.log("running");
