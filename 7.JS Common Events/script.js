img.style.width = "200px";
    img.style.height = "200px";
    // When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.
    document.addEventListener("click", function(event) {
      alert(`The user clicked at (${event.clientX}, ${event.clientY})`);
    });

    // When the user presses any key on the keyboard, display an alert with the key code of the pressed key.
    document.addEventListener("keydown", function(event) {
      alert(`The user pressed the key with key code ${event.keyCode}`);
    });

    // When the user moves the mouse over an image, change the image source to another image of your choice.
    const image = document.querySelector("img");
    const originalImageSource = image.src;

    image.addEventListener("mouseover", function(event) {
      image.src = "b.jpg";
    });

    image.addEventListener("mouseout", function(event) {
      image.src = originalImageSource;
    });