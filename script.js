const btn = document.getElementById('welcomeBTN');
let BTNPressed = false;

btn.addEventListener('click', function() {
    const mainctr = document.getElementById('mainCTR');

    if (!BTNPressed) {
        const newBTN = document.createElement('button');
        newBTN.setAttribute('id', 'newBTN')
        newBTN.innerText = 'now click me';

        mainctr.appendChild(newBTN)
        BTNPressed = true;

        document.getElementById('newBTN').addEventListener('click', function() {
            const mainctr = document.getElementById('mainCTR');
            const newBTN = document.getElementById('newBTN');
            // remove newBTN from mainctr
            mainctr.removeChild(newBTN);
            BTNPressed = false

        })
    }
    
})

