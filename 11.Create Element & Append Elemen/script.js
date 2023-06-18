document.addEventListener("DOMContentLoaded", function() {
    var myList = document.getElementById("myList");
    
    for (var i = 1; i <= 5; i++) {
      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(i));
      myList.appendChild(listItem);
    }
  });
  