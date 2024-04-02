const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.onclick = function() {
    const newDiv = document.createElement('div');
    const closeButton = document.createElement('button');

    newDiv.classList.add('newDiv'); 

    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    
    const links = [
        { text: 'Home', href: '#' },
        { text: 'New', href: '#' },
        { text: 'Popular', href: '#' },
        { text: 'Trending', href: '#' },
        { text: 'Categories', href: '#' }
    ];

    
    links.forEach(linkData => {
        const link = document.createElement('a');
        link.textContent = linkData.text;
        link.href = linkData.href;

        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightgray';
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });

        newDiv.appendChild(link); 
    });


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
