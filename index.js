let turn = 1

window.onclick = e => {
    (e.target);  // to get the element
    if (e.target.id.includes('_board'))
        changeXO(e.target)  // to get the element tag name alone

}

function changeXO(e) {
    console.log('here')
    if (turn === 1) {
        e.innerText = 'X'
        turn = 2
    } else {
        e.innerText = 'O'
        turn = 1
    }
};