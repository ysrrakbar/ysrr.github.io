function showForm(productElement) {
    const imgSrc = productElement.querySelector("img").src; 
    const title = productElement.querySelector("h4").textContent;
    const price = productElement.querySelector("p").textContent;

    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-price").textContent = price;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function pesan(){
    alert("Anda berhasil memesan");
    closePopup();
}
