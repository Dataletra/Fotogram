let myimages = [{ title: "Moon", filename: "010.jpg" },
{ title: "Dataletra 1", filename: "271837003_456094392842517_8842353332537776650_n (1).png" },
{ title: "COD solider", filename: "5000x2813-px-call-duty-gun-soldier-warrior-805327-wallhere.com.png" },
{ title: "Blue space", filename: "7006585-blue-space.jpg" },
{ title: "time travel", filename: "70F6C444-BBA0-46E3-A51F3E8ABEAF6B23_source.jpg" },
{ title: "Can you feel the sun?", filename: "711tEiOsDCL._SL1200_.jpg" },
{ title: "The tree", filename: "8fydajjfq9f31.jpg" },
{ title: "I dont even know what this is", filename: "951164a9cd5e2e13bc3f1f84757a731e@2x.jpg" },
{ title: "Corpse 1", filename: "a0mmzqsvth261 (1).png" },
{ title: "Corpse 2", filename: "Corpse colored final.png" },
{ title: "Ready Or Not Dataletra", filename: "Dataletra 2.png" },
{ title: "Minecraft my beloved", filename: "Minecraft_-_Volume_Beta.jpg" }
];

const containerRef = document.getElementById("photo-container");
const dialogRef = document.getElementById("photo-highlight");

function renderImages() {
    containerRef.innerHTML = "";
    for (let index = 0; index < myimages.length; index++) {
        const element = myimages[index];
        containerRef.innerHTML += getImages(index);
    }
}

function highlightImage(index) {
    updateModal(index);
    dialogRef.classList.add("open");
    dialogRef.showModal()
}

function updateModal(index) {
    dialogRef.innerHTML = "";
    dialogRef.innerHTML += getModal(index);
}

function incrementModal(index) {
    //safetycheck
    if (index == myimages.length - 1) index = -1;
    updateModal(index + 1);
}

function decrementModal(index) {
    //safetycheck
    if (index == 0) index = myimages.length;
    updateModal(index - 1);
}

function closeHighlightImage() {
    dialogRef.close()
    dialogRef.classList.remove("open");
}