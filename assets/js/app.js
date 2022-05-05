"use strict"

const body = document.querySelector("body")
const btn = document.querySelector(".sidebar-btn")

if (btn) {
	btn.addEventListener("click", (e) => {
		e.preventDefault()

		body.classList.add("open")
	})
}

const closeBtn = document.querySelector(".sidebar-close")

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		body.classList.remove("open")
	})
}

var header = document.querySelector(".header.header-primary")

if (header) {
	var sticky = header.offsetTop

	window.onscroll = function () {
		myFunction()
	}

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("bg")
		} else {
			header.classList.remove("bg")
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector("#duration")) {
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
	}
})

// financial dropdown
const financialBtn = document.querySelector(".trigger")
const financialInfo = document.querySelector(".sidebar-promo")

if (financialBtn) {
	financialBtn.addEventListener("click", (e) => {
		e.preventDefault()

		if (e.target.text === "View Financial") {
			// change text
			e.target.text = "Hide Financial"
			body.classList.add("show-details")
		} else {
			// change text
			e.target.text = "View Financial"
			body.classList.remove("show-details")
		}
	})
}
