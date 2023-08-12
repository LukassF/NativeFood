# NativeFoods
## Table of contents
* [General info](#general-info)
* [Steps to run](#steps-to-run)
* [Technologies](#technologies)


## General info
NativeFoods is an app whose main purpose is to provide quick and easy access to recipes from all over the world. Even the user may showcase his recipe by photographing it and submitting it with the necessary information. There is also a feature that allows the user to select a random recipe on days when they wish to explore. The app was built in Expo React Native, and all server actions were written in Node JS. 

## Steps to run
Below listed are the steps required for the testing of the app on your device.

Step 1. Download zip of the code in this repo and unpack it.

Step 2. Open a terminal, go to the folder with the unpacked code and run 'cd server' then in the server subfolder run 'npm install -y'.

Step 3. After the server package.json is installed run 'npm start'.

Step 4. Open another terminal and run 'cd client' then in the client subfolder run 'npm install -y' again.

Step 5. After the client package.json is installed run 'npm start', a QR code should appear.

Step 6. In the client subfolder find a folder named 'hooks' and in it a file called 'useFetch.js'. Open it and change the 'port' variable to the value shown below the QR code generated earlier (your Wi-Fi IpV4).

![image](https://github.com/LukassF/drop-ship/assets/132075104/c9f6ead9-9067-4e7c-b858-2a0ee78e36ea)

![image](https://github.com/LukassF/drop-ship/assets/132075104/ac6f0f11-59c6-40a5-a49c-73b71d6961a0)

![image](https://github.com/LukassF/drop-ship/assets/132075104/7e63c42a-bf74-40d4-a087-d75d8315e087)

Step 7. Install an Expo Go app on your mobile device.

Step 8. Scan the QR code.

Step 9. View the app!

## Technologies
The project is created with:

Client
* expo version 48.0.7
* react version: 18.2.0
* react-native version: 0.71.8
* react-dom version: 18.2.0
* redux version: 4.2.1
* react-redux version: 8.1.2
* axios version: 1.4.0

Server
* express version: 4.18.2
* mongoose version: 7.3.1
* body-parser version: 1.20.2
