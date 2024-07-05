document.addEventListener('DOMContentLoaded', () => {
    const actors = document.querySelectorAll('.actor');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupName = document.getElementById('popup-name');
    const popupAge = document.getElementById('popup-age');
    const popupMovie = document.getElementById('popup-movie');
    const popupBio = document.getElementById('popup-bio');
    const closeBtn = document.querySelector('.close');

    actors.forEach(actor => {
        actor.addEventListener('click', (event) => {
            const imageSrc = event.currentTarget.querySelector('img').src;
            const name = event.currentTarget.getAttribute('data-name');
            const age = event.currentTarget.getAttribute('data-age');
            const movie = event.currentTarget.getAttribute('data-movie');
            const bio = event.currentTarget.getAttribute('data-bio');
            
            popupImage.src = imageSrc;
            popupName.textContent = name;
            popupAge.textContent = `Edad: ${age}`;
            popupMovie.textContent = `Película: ${movie}`;
            popupBio.textContent = bio;
            
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
