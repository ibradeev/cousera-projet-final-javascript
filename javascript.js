

function addTabIndex() {
    console.log("Page loaded - adding tabindex to images.");
    const images = document.querySelectorAll(".preview");
    images.forEach((img, index) => {
        img.setAttribute("tabindex", "0");
        console.log(`Tabindex added to image ${index + 1}`);
    });
}

function upDate(previewPic) {
    console.log("Event triggered on mouseover or focus.");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("Event triggered on mouseout or blur.");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.textContent = "Hover over an image below to display here.";
}
