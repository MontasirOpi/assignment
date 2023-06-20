function sendAJAXPostRequest(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("The request was successful!");
      } else {
        console.log("The request failed!");
      }
    };
  }
  
  const data = {
    "name": "John Doe",
    "email": "johndoe@example.com"
  };
  
  sendAJAXPostRequest("https://api.example.com/submit", data);
  //14 and 15 korte 80% internet er help nite hoiche....