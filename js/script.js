// Função para criar a lista de reprodução de músicas
function createMusicList() {
    const musicListDiv = document.getElementById("music-list");

    // Limpa qualquer conteúdo pré-existente
    musicListDiv.innerHTML = "";

    // Cria e adiciona as playlists à página
    playlists.forEach(playlist => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

        const playlistName = document.createElement("h3");
        playlistName.textContent = playlist.name;

        const songsList = document.createElement("ul");
        playlist.songs.forEach((song, index) => {
            const songItem = document.createElement("li");
            songItem.textContent = song;
            songItem.dataset.index = index; // Armazenando o índice da música para identificação
            songItem.addEventListener("click", playSong); // Adicionando evento de clique para tocar a música
            songsList.appendChild(songItem);
        });

        playlistDiv.appendChild(playlistName);
        playlistDiv.appendChild(songsList);

        musicListDiv.appendChild(playlistDiv);
    });
}

// Função para reproduzir a música por 15 segundos
function playSong(event) {
    const index = event.target.dataset.index; // Obtendo o índice da música clicada
    const songs = playlists.flatMap(playlist => playlist.songs); // Obtendo uma lista com todas as músicas
    const audio = new Audio(); // Criando um novo elemento de áudio
    audio.src = `caminho/da/musica/${songs[index]}.mp3`; // Definindo a fonte da música

    audio.play(); // Iniciando a reprodução da música

    // Parando a reprodução após 15 segundos
    setTimeout(() => {
        audio.pause();
    }, 15000);
}

// Chama a função para criar a lista de reprodução de músicas quando a página carrega
window.addEventListener("load", createMusicList);