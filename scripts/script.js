document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('noteForm'); // Haetaan lomakkeen elementti ID:n perusteella
    const notesList = document.getElementById('notesList'); // Haetaan listan elementti ID:n perusteella

    noteForm.addEventListener('submit', event => {
        event.preventDefault(); // Estetään lomakkeen oletustoiminnot

        // Haetaan lomakkeen syötteet
        const name = noteForm.querySelector('#nameInput').value;
        const message = noteForm.querySelector('#messageInput').value;
        const important = noteForm.querySelector('#importantCheckbox').checked;

        // Luodaan uusi listaelementti
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        // Lisätään reunaviiva, jos muistiinpano on merkitty tärkeäksi
        if (important) {
            listItem.style.border = '2px solid red';
        }

        // Haetaan nykyinen päivämäärä ja aika
        const date = new Date();
        const dateString = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

        // Asetetaan listaelementin sisältö muistiinpanon tiedoilla
        listItem.innerHTML = `<strong>${name}:</strong> ${message} <br><small>${dateString}</small>`;
        notesList.appendChild(listItem);

        // Tyhjennetään lomake lähetettyä
        noteForm.reset();
    });
});