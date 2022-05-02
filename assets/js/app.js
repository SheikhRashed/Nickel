"use strict"

const body = document.querySelector("body")
const btn = document.querySelector(".sidebar-btn")

if (btn) {
	btn.addEventListener("click", (e) => {
		e.preventDefault()

		body.classList.toggle("open")
	})
}

const closeBtn = document.querySelector(".sidebar-close")

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		body.classList.remove("open")
	})
}

window.onscroll = function () {
	myFunction()
}

var header = document.querySelector(".header.header-primary")

if (header) {
	var sticky = header.offsetTop

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("bg")
		} else {
			header.classList.remove("bg")
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	var demo1 = new BVSelect({
		selector: "#duration",
		width: "100%",
		searchbox: false,
		offset: true,
		placeholder: "Select Option",
		search_placeholder: "Search...",
		search_autofocus: true,
		breakpoint: 450,
	})
})
