function naoBtn(t) {
    var aleatorio = parseInt(Math.random() * 90);
    var aleatorio2 = parseInt(Math.random() * 90);


    btn = t;
    btn.style.position = 'absolute';
    btn.style.right = aleatorio + '%';
    btn.style.bottom = aleatorio2 + '%';

}