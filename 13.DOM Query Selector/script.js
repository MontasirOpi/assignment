function changeParagraphColor(class_name) {
    var paragraphs = document.querySelectorAll('p');
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].classList.contains(class_name)) {
        paragraphs[i].style.color = 'red';
      }
    }
  }
  