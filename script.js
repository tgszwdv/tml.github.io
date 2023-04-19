const videos = [
  
{ link: "https://youtu.be/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/Evz8iIl5yrM?t=1607", nome: "Afrojack", style: "Pop/House/Progressive/Big Room", nota: "" },
{ link: "https://youtu.be/1FHngx3GvJA?t=181", nome: "Aline Rocha", style: "Soulful & House", nota: "" },
{ link: "https://youtu.be/j1ZZOuxtzrc?t=582", nome: "Alok", style: "DeepHouse/House/Brazilian Bass", nota: "" },
{ link: "https://youtu.be/yrU-zBOGZPw?t=961", nome: "Amber Bross", style: "Trance/Liquid Trance", nota: "" },
{ link: "https://youtu.be/EF9JTFq8ErY?t=2940", nome: "aname", style: "Trance/Liquid Trance", nota: "" },


];

let indice = 0;
const meuIframe = document.querySelector('#meu-iframe');
meuIframe.src = videos[indice].link;

const tabelaNotas = document.querySelector('#tabela-notas');

document.querySelector('#proximo').addEventListener('click', () => {
  const notaInput = document.querySelector('#nota');
  const nota = notaInput.value;
  if (nota < 0 || nota > 10) {
    alert('A nota deve estar entre 0 e 10.');
    return;
  }
  videos[indice].nota = nota;
  atualizarTabela();
  indice++;
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    return;
  }
  meuIframe.src = videos[indice].link;
  notaInput.value = '0';
});

function atualizarTabela() {
  videos.sort((a, b) => b.nota - a.nota);
  tabelaNotas.innerHTML = '';
  for (const video of videos) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${video.nome}</td>
      <td>${video.nota}</td>
      <td>${video.style}</td>
    `;
    tabelaNotas.appendChild(tr);
  }
}

atualizarTabela();
