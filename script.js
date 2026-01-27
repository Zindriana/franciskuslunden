const main = document.querySelector('main');

async function loadContent(page) {
    try {
        const response = await fetch(`resources/texts/${page}.html`);
        if (!response.ok) throw new Error('Filen kunde inte laddas');
        const html = await response.text();
        main.innerHTML = html;
    } catch (error) {
        main.innerHTML = '<p>Ett fel uppstod vid laddning av innehållet.</p>';
        console.error(error);
    }
}

document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;
        loadContent(id);
    });
});

loadContent('home');