"use strict"

const body = document.querySelector("body")
const btn = document.querySelector(".sidebar-btn")

btn.addEventListener("click", (e) => {
	e.preventDefault()

	body.classList.toggle("open")
})

const closeBtn = document.querySelector(".sidebar-close")

closeBtn.addEventListener("click", () => {
	body.classList.remove("open")
})

window.onscroll = function () {
	myFunction()
}

var header = document.querySelector(".header.header-primary")
var sticky = header.offsetTop

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("bg")
	} else {
		header.classList.remove("bg")
	}
}
