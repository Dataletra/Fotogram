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
{ title: "Minecraft my beloved", filename: "Minecraft_-_Volume_Beta.jpg" },
{ title: "yet another artpiece", filename: "Data Skull.jpg" }
]
console.log(myimages.length)

const containerRef = document.getElementById("photo-container");
const dialogRef = document.getElementById("photo-highlight");


function renderImages() {
    containerRef.innerHTML = "";
    for (let index = 0; index < myimages.length; index++) {
        const element = myimages[index];
        console.log(element)
        containerRef.innerHTML += /*html*/`
        <div id="image-container">
            <img class="image" id="img${index}" 
            src="/media/${myimages[index].filename}" 
            onclick="highlightImage(${index})">
        </div>`;
    }
}

renderImages();

function highlightImage(index) {
    updateModal(index);
    dialogRef.classList.add("open");
    dialogRef.showModal()
}

function updateModal(index) {

    dialogRef.innerHTML = "";

    dialogRef.innerHTML += /*html*/`
    <div class="dialog-content">
        <header class="photo-highlight-header">
			<p>${myimages[index].title}</p>
			<button class="button-close" onclick="closeHighlightImage()">X</button>
		</header>
        <img class="highlight-image" id="img${index}" 
            src="/media/${myimages[index].filename}" 
            onclick="highlightImage(${index})">
		<footer class="photo-highlight-footer">
			<button class="button-left" onclick="decrementModal(${index})"><img class="button-right" src="/media/button.png"></button>
			<p>${index + 1}/${myimages.length}</p>
			<button  onclick="incrementModal(${index})"><img class="button-right" src="/media/button.png"></button>
		</footer>
    </div>`;
}

function incrementModal(index) {
    //safetycheck
    if (index == myimages.length - 1) return;
    updateModal(++index);
}
function decrementModal(index) {
    //safetycheck
    if (index == 0) return;
    updateModal(--index);
}
function closeHighlightImage() {
    dialogRef.close()
    dialogRef.classList.remove("open");
}