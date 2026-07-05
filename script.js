let myimages = [{ title: "Moon", filename: "010.jpg" },
{ title: "Dataletra 1", filename: "271837003_456094392842517_8842353332537776650_n (1).png" },
{ title: "Moon", filename: "5000x2813-px-call-duty-gun-soldier-warrior-805327-wallhere.com.png" },
{ title: "Moon", filename: "7006585-blue-space.jpg" },
{ title: "Moon", filename: "70F6C444-BBA0-46E3-A51F3E8ABEAF6B23_source.jpg" },
{ title: "Moon", filename: "711tEiOsDCL._SL1200_.jpg" },
{ title: "Moon", filename: "8fydajjfq9f31.jpg" },
{ title: "Moon", filename: "951164a9cd5e2e13bc3f1f84757a731e@2x.jpg" },
{ title: "Moon", filename: "a0mmzqsvth261 (1).png" },
{ title: "Moon", filename: "Corpse colored final.png" },
{ title: "Moon", filename: "Data Skull.jpg" },
{ title: "Moon", filename: "Dataletra 2.png" },
{ title: "Moon", filename: "Minecraft_-_Volume_Beta.jpg" },
{ title: "Moon", filename: "Data Skull.jpg" }
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
            <img class="image" id="img${index}" src="/media/${myimages[index].filename}" onclick="highlightImage(${index})">
        </div>`;
    }
}

renderImages();

function highlightImage(index) {
    console.log(index)
    updateModal(index);
    dialogRef.classList.add("open");
    dialogRef.showModal()
}

function updateModal(index) {

    dialogRef.innerHTML = "";

    dialogRef.innerHTML += /*html*/`
    <div class="dialog-content">
        <header id="photo-highlight-header">
			<p>${myimages[index].title}</p>
			<button onclick="closeHighlightImage()">X</button>
		</header>
        <img class="highlight-image" id="img${index}" 
            src="/media/${myimages[index].filename}" 
            onclick="highlightImage(${index})">
		<footer id="photo-highlight-footer">
			<button onclick="decrementModal(${index})">X</button>
			<p>${index + 1}/${myimages.length}</p>
			<button onclick="incrementModal(${index})">X</button>
		</footer>
    </div>`;
}

// bugged
function incrementModal(index) {
    if (index == myimages.length - 1) return;
    updateModal(++index);
}
function decrementModal(index) {
    if (index == 0) return;
    updateModal(--index);
}
function closeHighlightImage() {
    dialogRef.close()
    dialogRef.classList.remove("open");
}