function cherchervideoumot() {
    let bank = ["", "nintendo", "sega", "microsoft", "sega","bomberman", "un", "deux", "trois", "hello", "playstation"];
    document.getElementsByClassName("bomberman")[0].style.display = "block";
    document.getElementsByClassName("un")[0].style.display = "block";
    document.getElementsByClassName("deux")[0].style.display = "block";
    document.getElementsByClassName("trois")[0].style.display = "block";
    document.getElementsByClassName("hello")[0].style.display = "block";

    if (document.getElementById("barre").value == bank[0]) {
        document.getElementById("barre").style.display = "block";
    }
    else if (document.getElementById("barre").value == bank[1]) {
        document.getElementsByClassName("un")[0].style.display = "none";
        document.getElementsByClassName("deux")[0].style.display = "none";
        document.getElementsByClassName("trois")[0].style.display = "none";

    }
    else if (document.getElementById("barre").value == bank[2]) {
        document.getElementsByClassName("bomberman")[0].style.display = "none";
        document.getElementsByClassName("deux")[0].style.display = "none";
        document.getElementsByClassName("trois")[0].style.display = "none";
    }
    else if (document.getElementById("barre").value == bank[3]) {
        document.getElementsByClassName("bomberman")[0].style.display = "none";
        document.getElementsByClassName("un")[0].style.display = "none";
        document.getElementsByClassName("trois")[0].style.display = "none";
    }
    else if (document.getElementById("barre").value == bank[4]) {
        document.getElementsByClassName("bomberman")[0].style.display = "none";
        document.getElementsByClassName("un")[0].style.display = "none";
        document.getElementsByClassName("deux")[0].style.display = "none";
    }
}