// Gate-D minimal deck loader (fetch version)
let deck = [];
let current = 0;

async function loadDeck() {
  const res = await fetch('demo_deck.json');
  deck = await res.json();
  render();
}

function render() {
  const root = document.getElementById('root') || document.body;
  const slide = deck[current];
  root.innerHTML = `
    <div class="slide">
      <img src="${slide.image}" style="max-width:60%;margin:2rem auto;display:block"/>
      <p style="color:white;text-align:center;font-size:1.2rem">${slide.caption}</p>
      <div style="text-align:center;margin-top:1rem">
        ${slide.choices
          .map(
            (c, i) =>
              `<button data-i="${i}" style="margin:0.5rem">${c.text}</button>`
          )
          .join('')}
      </div>
    </div>`;
  root.querySelectorAll('button').forEach((btn) =>
    btn.addEventListener('click', (e) => {
      const idx = e.target.dataset.i;
      const nextId = slide.choices[idx].next;
      current = deck.findIndex((s) => s.id === nextId);
      if (current === -1) current = 0;
      render();
    })
  );
}

loadDeck();
