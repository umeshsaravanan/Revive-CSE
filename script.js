function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var image = document.getElementById('myImage');
    if (image.src.endsWith('light.png')) {
        image.src = 'images/dark.png';
        image.alt = 'dark';
        image.style.height = '25px';
        image.style.width = '25px';
        image.style.marginTop = '0px';
    } else {
        image.src = 'images/light.png';
        image.alt = 'light';
        image.style.height = '35px';
        image.style.width = '35px';
        image.style.marginTop = '6px';
    }
}
