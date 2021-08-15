var button = document.querySelectorAll(".btn")
console.log(button)
var card = document.querySelectorAll(".item")
console.log(card)
var text = document.querySelector(".text")
var searchBar = document.querySelector("input")

button.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var btnClick = btn.textContent.toLowerCase();
        if (btnClick == "all") {
            card.forEach(function (card) {
                card.style.display = "block"
                text.textContent = "MembER"
            })
        } else {
            card.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = "block"
                    text.textContent = btnClick.charAt(0).toUpperCase() + btnClick.slice(1);
                }
                else {
                    card.style.display = "none"
                }
            })
        }
    })
})

// button[0].addEventListener("click", function () {
//     card.forEach(function (card) {
//         card.style.display = "block"
//         text.textContent = "MembER"
//     })
// })

// button[1].addEventListener("click", function () {
//     card.forEach(function (card) {
//         if (card.classList.contains("cat")) {
//             card.style.display = "block"
//             text.textContent = "Cat"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// })

// button[2].addEventListener("click", function () {
//     card.forEach(function (card) {
//         if (card.classList.contains("dog")) {
//             card.style.display = "block"
//             text.textContent = "Dog"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// })

// button[3].addEventListener("click", function () {
//     card.forEach(function (card) {
//         if (card.classList.contains("hamster")) {
//             card.style.display = "block"
//             text.textContent = "Hamster"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// })

// button[4].addEventListener("click", function () {
//     card.forEach(function (card) {
//         if (card.classList.contains("others")) {
//             card.style.display = "block"
//             text.textContent = "Others"
//         }
//         else {
//             card.style.display = "none"
//         }
//     })
// })

// Part 4
searchBar.addEventListener("keyup", function (event) {
    var userInput = event.target.value.toLowerCase().trim();
    card.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = "block"
        } else {
            card.style.display = "none"
        }
    })
})

var image = document.querySelectorAll(".card")
image.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        element.style.width = "380px"
        element.style.hieght = "280px"
    })
})

image.forEach(function (element) {
    element.addEventListener("mouseout", function () {
        element.style.width = "350px"
        element.style.hieght = "250px"
    })
})
