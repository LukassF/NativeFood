# NativeFoods
## Table of contents
* [General info](#general-info)
* [Steps to run](#steps-to-run)
* [Technologies](#technologies)
* [Visualisation](#visualisation)


## General info
NativeFoods is an app whose main purpose is to provide quick and easy access to recipes from all over the world. Even the user may showcase his recipe by photographing it and submitting it with the necessary information. There is also a feature that allows the user to select a random recipe on days when they wish to explore. The app was built in Expo React Native, and all server actions were written in Node JS. 

## Steps to run
Below listed are the steps required for the testing of the app on your device.

Step 1. Download zip of the code in this repo and unpack it.

Step 2. Open a terminal, go to the folder with the unpacked code and run 'cd server' then in the server subfolder run 'npm install -y'.

Step 3. After the server package.json is installed run 'npm start'.

Step 4. Open another terminal and run 'cd client' then in the client subfolder run 'npm install -y' again.

Step 5. After the client package.json is installed run 'npm start', a QR code should appear.

Step 6. In the client subfolder find a folder named 'hooks' and in it a file called 'useFetch.js'. Open it and change the 'port' variable to the value shown below the QR code generated earlier (under the yellow box on the image below, its your Wi-Fi IpV4).

![image](https://github.com/LukassF/drop-ship/assets/132075104/c9f6ead9-9067-4e7c-b858-2a0ee78e36ea)

![image](https://github.com/LukassF/drop-ship/assets/132075104/8a2e0e55-cfdc-4e11-b071-3a29498d5ac3)

![tempsnip](https://github.com/LukassF/drop-ship/assets/132075104/23aa6048-391d-472a-afc0-55df8345c3e8)

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

## Visualisation
![Screenshot_20230815_171331_host exp exponent](https://github.com/LukassF/NativeFood/assets/132075104/47e02254-7ed8-4bea-9ddd-6895a031ec19)
![Screenshot_20230815_171324_host exp exponent](https://github.com/LukassF/NativeFood/assets/132075104/7458399a-08a5-4c4b-bf3f-9200a0c72d12)
![Screenshot_20230815_171237_host exp exponent](https://github.com/LukassF/NativeFood/assets/132075104/c87e1407-5c21-4eb7-8676-13569055fd43)
![Screenshot_20230815_171255_host exp exponent](https://github.com/LukassF/NativeFood/assets/132075104/26a756f5-bc1d-4584-a355-88d7fa3d2ba6)
![Screenshot_20230815_171357_host exp exponent](https://github.com/LukassF/NativeFood/assets/132075104/669ddb2b-e1d6-497f-a164-14f8e1189aca)

