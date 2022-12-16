//** Bir kapat düğmesi oluşturup her liste ögesine ekleyelim
var myNodeList = document.getElementsByTagName("LI")
var i;
for (let i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    myNodeList[i].appendChild(span)
}

//**Geçerli liste öğesini gizlemek için kapat düğmesine tıklayın
var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//** Bir liste öğesine tıklandığında "işaretli" sembolü eklemek
var liste = document.querySelector("ul")
list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked")
    }
}, false);

//** Ekle düğmesine tıkladığımızda yeni bir liste ögesi oluşturma
function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') {
        alert("Listeye boş ekleme yapamazsınız")

    } else {
        document.getElementById("list").appendChild(li)
        alert("Listeye Eklendi")
    }
    document.getElementById("task").value = ""

    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}