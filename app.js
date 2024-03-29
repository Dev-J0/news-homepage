const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.onclick = function() {
    const newDiv = document.createElement('div');
    const closeButton = document.createElement('button');

    newDiv.classList.add('newDiv');
    newDiv.textContent = 'This is menu';

    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    
   

    const menu = document.getElementById('logo');
    menu.appendChild(newDiv);

    closeButton.textContent = 'X'; 
    closeButton.classList.add('close-button');
    closeButton.onclick = function() { 
        newDiv.style.display = 'none';
        overlay.style.display = 'none';
    };

    newDiv.appendChild(closeButton);
};
