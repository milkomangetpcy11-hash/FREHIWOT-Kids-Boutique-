function showCollection(collectionName) {
document.getElementById(“message-title”).textContent =
collectionName;

document.getElementById(“message-box”)
.classList.add(“open”);

document.getElementById(“overlay”)
.classList.add(“open”);
}

function closeCollection() {
document.getElementById(“message-box”)
.classList.remove(“open”);

document.getElementById(“overlay”)
.classList.remove(“open”);
}
