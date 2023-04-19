const videos = [
  //{ link: "https://www.youtube.com/embed/yo4pmauhugo", nome: "Tiesto", style: "Trance", nota: "" },
  //{ link: "https://www.youtube.com/embed/9Sc-ir2UwGU", nome: "Armin van Buuren", style: "Trance", nota: "" },
 // { link: "https://www.youtube.com/embed/fzQ6gRAEoy0", nome: "David Guetta", style: "Electro House", nota: "" }
{ link: "https://www.youtube.com/embed/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/Evz8iIl5yrM?t=1607", nome: "Afrojack", style: "Pop/House/Progressive/Big Room", nota: "" },
{ link: "https://www.youtube.com/embed/1FHngx3GvJA?t=181", nome: "Aline Rocha", style: "Soulful & House", nota: "" },
{ link: "https://www.youtube.com/embed/j1ZZOuxtzrc?t=582", nome: "Alok", style: "DeepHouse/House/Brazilian Bass", nota: "" },
{ link: "https://www.youtube.com/embed/yrU-zBOGZPw?t=961", nome: "Amber Bross", style: "Trance/Liquid Trance", nota: "" },
{ link: "https://www.youtube.com/embed/EF9JTFq8ErY?t=2940", nome: "aname", style: "Trance/Liquid Trance", nota: "" },


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
