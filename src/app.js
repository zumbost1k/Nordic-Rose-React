const express = require("express");
const app = express();//это объект с кучей методов

app.listen((error) => {
    error ? console.log(error) : console.log(`listeting port ${3000}`)
    console.log("hello world")
})