# Location server

## Clonar el repositorio

Para clonar el repositorio, puedes usar el siguiente comando:

```bash
git clone https://github.com/YasserCR/YasserCR.git
```

## Correr el código
Para correr el código, primero necesitas instalar las dependencias. Puedes hacerlo con el siguiente comando:

```bash
npm install
```

Luego, puedes correr el código con el siguiente comando:

```bash
npm run dev
```

## Dependencias externas

Se ocupa una base de datos de MongoDB, el url que se necesita está
en el archivo `.env.example`, hace falta renombrarlo a `.env` y colocar el puerto deseado y la url hacia nuestra base de datos en 
MongoDB.

## Requisitos

Este proyecto está hecho con node 16, por lo que no se sabe si pueda presentar problemas en versiones posteriores o anteriores. Puedes verificar tu versión de Node.js con el siguiente comando:

```bash
node --version
v16.20.0
 
