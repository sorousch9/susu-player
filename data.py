import json
import random
import requests

API_URL = "https://api.deezer.com/search?q="
QUERY_PARAMS = ["rock", "pop", "rap" , "jazz", "hippop"]
NUM_MUSICS = 150

musics = []
for i in range(NUM_MUSICS):
    query_param = random.choice(QUERY_PARAMS)
    response = requests.get(API_URL + query_param).json()
    if response.get("error"):
        continue  # Skip over any error responses
    track = random.choice(response["data"])
    music = {
        "id": i,
        "title": track.get("title", f"Title{i}"),
        "artist": track.get("artist", {}).get("name", f"Artist{i}"),
        "album": track.get("album", {}).get("title", f"Album{i}"),
        "release_date": track.get("release_date", "Unknown"),
        "author": "Susu",
        "genre": query_param.capitalize(),
        "audio": track.get("preview", ""),
        "album_img": track.get("album", {}).get("cover_medium", ""),
    }
    musics.append(music)

with open("musics.json", "w") as f:
    json.dump(musics, f, indent=2)
