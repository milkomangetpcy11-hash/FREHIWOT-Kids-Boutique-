function showCollection(collectionName) {
const title = document.getElementById(“message-title”);
const popup = document.getElementById(“message-box”);
const overlay = document.getElementById(“overlay”);

if (title) {
title.textContent = collectionName;
}

if (popup) {
popup.classList.add(“open”);
}

if (overlay) {
overlay.classList.add(“open”);
}

document.body.style.overflow = “hidden”;
}

function closeCollection() {
const popup = document.getElementById(“message-box”);
const overlay = document.getElementById(“overlay”);

if (popup) {
popup.classList.remove(“open”);
}

if (overlay) {
overlay.classList.remove(“open”);
}

document.body.style.overflow = “”;
}

/* Close popup with the Escape key */

document.addEventListener(“keydown”, function(event) {
if (event.key === “Escape”) {
closeCollection();
}
});

/* Make sure the popup starts closed */

document.addEventListener(“DOMContentLoaded”, function() {
closeCollection();
});
