# Deck Loader – JSON Contract (Gate D)

```jsonc
{
  "slides": [
    {
      "id": "coalition_intro",
      "image": "assets/coalition_balance.png",
      "caption": "Coalition balance at game start",
      "choices": [
        { "text": "Invite Green Party", "next": "greens_join" },
        { "text": "Court Nationalists", "next": "natl_join" }
      ],
      "effects": { "liberal_score": +5, "conservative_score": -3 }
    }
  ]
}
