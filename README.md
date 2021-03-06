# NaxChatApp

Aplicaci贸n de chat de c贸digo multiplataforma (ios, android, windows, pwa). El dise帽o es para m贸vil.

### Pwa

[Demo online](https://nacholabraweb.000webhostapp.com/pwa/movil) | [Descargar](./dist/Pwa/)

### Android

[Capacitor](./dist/Android/naxChat_Capacitor.apk) | [Cordova ](./dist/Android/naxChat_Cordova.apk)

### Pre-requisitos 馃搵

* [NodeJs](https://nodejs.org/es/)
* [Quasar](https://quasar.dev/quasar-cli/installation)

### Instalaci贸n 馃敡

Posterior a instalar quasar ejecute en la consola
```
quasar create carpeta
```

## Desarrollo 馃摝


```shell
cd carpeta
quasar dev
```
No olvides configurar tu proyecto de firebase en boot/firebase.js (Puedes poner la configuraci贸n en otra parte, yo la puse ah铆)

## Producci贸n

Pwa
```
quasar build -m pwa
```
El codigo compilado se ubica en ./dist

Deploy m贸vil
```
quasar build -m [capacitor|cordova] -T [android|ios]
```

Deploy se ubica en la carpeta src-cordova

Electron (.exe)
```
quasar build -m electron
```

Generar claves para el service worker
```
npx web-push generate-vapid-keys
```

![](./public/NaxChatApp.gif)

### Funcionalidades

* Enviar Chats con codificaci贸n para privacidad (solo puedes leer los mensajes de la app)
* Mandar gifs desde la api de GIPHY Developers
* Subir fotos de galer铆a o c谩mara desde smartphone
* Lista de amigos agregados y solicitudes
* im谩genes de menor tama帽o redimensionadas con librer铆a ES6 de Js a thumbnails
* Mandar/recibir/borrar solicitudes de amistar con Email o Id de usuario
* Notificaciones push en 2do plano desde service worker con api alojada en heroku con nodeJs

### Herramientas usadas

* VueJs
* Quasar
* Vuex
* Firebase
* Javascript
* NodeJs
* Apis
* Service workers
* ES6

## Github 馃搶

Uso [GIT](https://git-scm.com/) para control de versiones.
Puedes ver los comandos que uso [aqui](https://nacholabraweb.000webhostapp.com/Tutoriales#/Github)

Agradecimientos a github por tener este proyecto en la nube.

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia (MIT)
App desarrollada por Ignacio Labra

![](https://raw.githubusercontent.com/naxo25/App-Chat-Quasar-VueJs-Firebase/6f1020b77b2abfcdcf4f7c50125ffedd957a584e/assets/quasar-logo-full1.svg)

