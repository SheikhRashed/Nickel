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
const financialBtn = document.querySelectorAll(".trigger")
const financialInfo = document.querySelector(".sidebar-promo")

if (financialBtn) {
	financialBtn.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault()
			body.classList.toggle("show-details")

			// if (e.target.text === "View Financial") {
			// 	// change text
			// 	e.target.text = "Hide Financial"
			// 	body.classList.add("show-details")
			// } else {
			// 	// change text
			// 	e.target.text = "View Financial"
			// 	body.classList.remove("show-details")
			// }
		})
	})
}

var sliderOne = document.getElementById("price-range")
var valueOne = document.getElementById("price-value")

if (sliderOne) {
	noUiSlider.create(sliderOne, {
		start: [3000],
		step: 500,
		range: {
			min: [1000],
			max: [10000],
		},
	})

	sliderOne.noUiSlider.on("update", function (values, handle) {
		valueOne.innerHTML = values[handle]
	})
}

var sliderTwo = document.getElementById("price-range-one")
var valueTwo = document.getElementById("price-value-one")

if (sliderTwo) {
	noUiSlider.create(sliderTwo, {
		start: [4000],
		step: 1000,
		range: {
			min: [2000],
			max: [10000],
		},
	})

	sliderTwo.noUiSlider.on("update", function (values, handle) {
		valueTwo.innerHTML = values[handle]
	})
}
