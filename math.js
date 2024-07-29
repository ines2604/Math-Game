let score = 0;

const correcte = document.getElementById('correcte');
const incorrecte = document.getElementById('incorrecte');
const perdu = document.getElementById('perdu');
const gagne = document.getElementById('gagne');

function corriger() {
    let nb1 = parseInt(document.getElementById('nb1').textContent);
    let nb2 = parseInt(document.getElementById('nb2').textContent);
    let op = document.getElementById('op').textContent;
    let rep = parseInt(document.getElementById('reponse').value);
    let con;
    switch (op) {
        case '+':
            con = nb1 + nb2;
            break;
        case '-':
            con = nb1 - nb2;
            break;
        default:
            break;
    }

    if (con === rep) {
        score += 1;
        correcte.classList.remove('hidden');
        incorrecte.classList.add('hidden');
        perdu.classList.add('hidden');
        gagne.classList.remove('hidden');
        document.getElementById("score").textContent = score;
        changer();
    } else {
        correcte.classList.add('hidden');
        incorrecte.classList.remove('hidden');
        perdu.classList.remove('hidden');
        gagne.classList.add('hidden');
        document.getElementById("score").textContent = score;
        score=0;
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changer() {
    let n1 = getRandomArbitrary(1, 20);
    let n2 = getRandomArbitrary(1, 20);
    const tab = ['+', '-'];
    let i = getRandomArbitrary(0, tab.length - 1);

    document.getElementById('nb1').textContent = n1;
    document.getElementById('nb2').textContent = n2;
    document.getElementById('op').textContent = tab[i];

    correcte.classList.add('hidden');
    incorrecte.classList.add('hidden');
    perdu.classList.add('hidden');
    gagne.classList.remove('hidden');
}
