#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"

npm install

echo "[*] Semua telah di install, Untuk menjalankan ketik \"node index.js\" JANGAN LUPA FOLLOW https://github.com/Zer0-Tw0"
