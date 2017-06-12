'use strict'

const canvasId = 'universe'

const start = () => {
  console.log("Hello World")
  const canvas = document.getElementById(canvasId)
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
}

window.onload = start
