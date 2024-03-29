const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.onclick = function() {
    const newDiv = document.createElement('div');
    const closeButton = document.createElement('button');

    newDiv.classList.add('newDiv');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    newDiv.textContent = 'This is menu';
    newDiv.style.backgroundColor = 'white';
    newDiv.style.height = '800px';
    newDiv.style.width = '200px';
    newDiv.style.position = 'fixed';
    newDiv.style.right = '0';
    newDiv.style.top = '0';
    newDiv.style.zIndex = '2';

    const menu = document.getElementById('logo');
    menu.appendChild(newDiv);

    closeButton.textContent = 'X'; 
    closeButton.classList.add('close-button');
    closeButton.onclick = function() { 
        console.log('click');
    };

    newDiv.appendChild(closeButton);
};
