

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
// "acc" este lista de butoane
// "acc[i]" va fi un buton din tabel in dependenta de valoarea lui i
  acc[i].addEventListener("click", showAcc);
  // "addEventListener()" este o metoda care se aplica la elemente html si are ca scop 
  // adaugarea unui  eveniment (ex: click).Ia in parametri numele evenimentului si functia care trebuie executata
}



function showAcc() {
    // "this" este obiectul (buton in cazul nostru) 
    // "classList" este lista noastra de clase din obiectul button
    // "toggle" este o metoda care se aplica asupra classList.  Luind in parametru numele clasei nou create ,
    // o adauga in caz ca nu exista in lista de clase sau o sterge in cazul in in care ea exista deja
    this.classList.toggle("active");
    

   
    var panel = this.nextElementSibling;
    // stocam in variabila "panel" urmatorul element  din obiect(this) care in cazul nostru este "div" 
    // cu ajutorul acestei proprietati.

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    // in caz ca "panel" este vizibil sa fie ascuns iar in cazul in care e ascuns sa apara

  }

