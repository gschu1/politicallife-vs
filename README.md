# Political Life — Gate-D Vertical Slice

This repo hosts the playable **Political Life** prototype (Gate D milestone) and all supporting assets.

| Live demo | Source deck |
|-----------|-------------|
| **https://gschu1.github.io/politicallife-vs/** | [`public/demo_deck.json`](public/demo_deck.json) |

---

## What’s in the slice?

* **Three decision slides** built in Twine, exported to JSON  
* Minimal **JavaScript loader** (`public/loader.js`) that reads the JSON and renders choices  
* Auto-deploy **GitHub Pages** workflow — every push to `main` updates the live demo

---

## Run locally

```bash
git clone https://github.com/gschu1/politicallife-vs.git
cd politicallife-vs/public
python -m http.server 5000
# open http://localhost:5000  in your browser

