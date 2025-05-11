#!/usr/bin/env python3
"""
Quick-n-dirty exporter:
  $ python tools/twine2json.py deck/story.html > public/demo_deck.json
Assumes SugarCube format; extracts 〈tw-passage〉 tags whose
titles start with a number (01_, 02_, …) and have fields in JSON front-matter.
"""
import sys, json, re, html, pathlib
from bs4 import BeautifulSoup   # pip install beautifulsoup4

path = pathlib.Path(sys.argv[1])
soup = BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")
slides = []
for p in soup.find_all("tw-passagedata"):
    title = p["name"]
    if not re.match(r"\d", title):          # skip meta passages
        continue
    body = html.unescape(p.string or "")
    data = json.loads(body.strip())         # passage contains pure JSON
    slides.append(data)
json.dump(slides, sys.stdout, indent=2)
