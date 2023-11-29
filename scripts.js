const albums = document.querySelectorAll('.album');
const photoPopup = document.getElementById('photoPopup');
const closeButton = document.getElementById('closeButton');
const popupPhoto = document.getElementById('popupPhoto');
const popupDescription = document.getElementById('popupDescription');

albums.forEach(album => {
  album.addEventListener('click', () => {
    const albumTitle = album.querySelector('h2').textContent;
    const albumDescription = album.querySelector('.description').textContent;
    const photos = album.querySelectorAll('img');
    photoPopup.style.display = 'block';
    popupDescription.textContent = albumDescription;

    photos.forEach(photo => {
      photo.addEventListener('click', () => {
        const photoSrc = photo.src;
        popupPhoto.src = photoSrc;
        popupDescription.textContent = albumTitle;
      });
    });
  });
});

closeButton.addEventListener('click', () => {
  photoPopup.style.display = 'none';
});