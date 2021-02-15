'use strict'

const range = (document.querySelector("#range") as HTMLFormElement)
const valoracionbtn = (document.querySelector("#valoracionbtn") as HTMLFormElement)

    valoracionbtn.addEventListener("click",()=>{
        alert(`Has valorado con ${range.value} puntos`)
    })


const mostarcuenta = (document.querySelector("#cuentabtn") as HTMLFormElement)
const cuenta = (document.querySelector("#cuenta") as HTMLFormElement)


    mostarcuenta.addEventListener("click",()=>{
            alert(`le informamos que su número de cuenta bancaria es: ${cuenta.value}`)
        })

const dia = (document.querySelector("#diabtn") as HTMLFormElement)
const fecha1 = (document.querySelector("#fecha") as HTMLFormElement)

    dia.addEventListener("click",()=>{
        alert(`este es el ${Date}`)
    })