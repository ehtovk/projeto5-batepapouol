function closeJoinPage() {
    document.querySelector(".join-page").classList.add("hidden");
}

function openMenu() {
    document.querySelector(".menu").classList.add("active");
    document.querySelector(".blur").classList.add("show");
}

function closeMenu() {
    document.querySelector(".menu").classList.remove("active");
    document.querySelector(".blur").classList.remove("show");
    console.log("teste")
}