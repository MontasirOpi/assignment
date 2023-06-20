function sendAJAXGetRequest(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log("The request failed!");
    }
  };
  xhr.send();
}

sendAJAXGetRequest("https://api.example.com/data");
//14 and 15 korte 80% internet er help nite hoiche....