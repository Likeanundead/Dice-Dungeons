const diceSound = new Audio('media/dado.mp3');

function rollDice(resultId, button) {

    diceSound.play();

    const result = Math.floor(Math.random() * 20) + 1;
    document.getElementById(resultId).textContent = `Risultato: ${result}`;
    
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
}

function calculateModifier(stat) {
    if (stat >= 8 && stat <= 9) return -1;
    if (stat >= 10 && stat <= 11) return 0;
    if (stat >= 12 && stat <= 13) return 1;
    if (stat >= 14 && stat <= 15) return 2;
    if (stat >= 16 && stat <= 17) return 3;
    if (stat >= 18 && stat <= 19) return 4;
    if (stat === 20) return 5;
    return 0;
}

function rollDiceWithModifier(statId, resultId) {

    diceSound.play();
    
    const statValue = parseInt(document.getElementById(statId).value);
    if (isNaN(statValue) || statValue < 8 || statValue > 20) {
        document.getElementById(resultId).textContent = 'Inserisci un numero valido tra 8 e 20';
        return;
    }
    
    const diceRoll = Math.floor(Math.random() * 20) + 1;
    const modifier = calculateModifier(statValue);
    const finalResult = diceRoll + modifier;
    
    document.getElementById(resultId).textContent = `Risultato: ${diceRoll} + Modificatore: ${modifier}`;
    

    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);
}

function validateInput(input) {
    const value = input.value;
    if (isNaN(value) || value < 8 || value > 20) {
        input.classList.add('invalid');
        document.getElementById('error-message').textContent = 'Valore non valido. Inserisci un numero tra 8 e 20.';
    } else {
        input.classList.remove('invalid');
        document.getElementById('error-message').textContent = '';
    }
}

function rollD4(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 4) + 1; // Tira un dado D4

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD6(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 6) + 1; // Tira un dado D6

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD8(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 8) + 1; // Tira un dado D8

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD10(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 10) + 1; // Tira un dado D10

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}
function rollD12(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 12) + 1; // Tira un dado D12

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function rollD100(resultId) {

    diceSound.play();

    const result = Math.floor(Math.random() * 100) + 1; // Tira un dado D100

    document.getElementById(resultId).textContent = `Risultato: ${result}`;

}

function updateCalculations() {
    const costituzione = parseInt(document.getElementById('costituzione').value) || 0;
    const destrezza = parseInt(document.getElementById('destrezza').value) || 0;

    const armorClass = calculateArmorClass(costituzione);
    const iniziativa = calculateIniziativa(destrezza);

    document.getElementById('armor-class-result').textContent = `Armor Class: ${armorClass}`;
    document.getElementById('initiative-result').textContent = `Iniziativa: ${iniziativa}`;

    //mettiamo i valori nei campi input nascosti
    document.getElementById('armorclass').value = armorClass;
    document.getElementById('iniziativa').value = iniziativa;
}

function calculateArmorClass(costituzione) {
    if (costituzione >= 8 && costituzione <= 9) return -1;
    if (costituzione >= 10 && costituzione <= 11) return 0;
    if (costituzione >= 12 && costituzione <= 13) return 1;
    if (costituzione >= 14 && costituzione <= 15) return 2;
    if (costituzione >= 16 && costituzione <= 17) return 3;
    if (costituzione >= 18 && costituzione <= 19) return 4;
    if (costituzione === 20) return 5;
    return 0;
}

function calculateIniziativa(destrezza) {
    if (destrezza >= 8 && destrezza <= 9) return -1;
    if (destrezza >= 10 && destrezza <= 11) return 0;
    if (destrezza >= 12 && destrezza <= 13) return 1;
    if (destrezza >= 14 && destrezza <= 15) return 2;
    if (destrezza >= 16 && destrezza <= 17) return 3;
    if (destrezza >= 18 && destrezza <= 19) return 4;
    if (destrezza === 20) return 5;
    return 0;
}

function creaPersonaggio() {
    const form = document.getElementById('creazionescheda');

    const inputs = form.querySelectorAll('input, textarea');
    let form_valido = true;
    let errorMessage = '';

    const errorMessageElement = document.getElementById('error-message');
    inputs.forEach(input => {
        input.classList.remove('invalid');

        if (input.hasAttribute("required") && (input.value == null || input.value == undefined || input.value.trim() === '')) {
            form_valido = false;
            errorMessage += `Riempire il campo ${input.name}.<br>`;
            input.classList.add('invalid');
        }
    });

    if (form_valido) {
        const nome = document.getElementById('nome').value;
        const imageurl = document.getElementById('imageurl').value;
        const classe = document.getElementById('classe').value;
        const razza = document.getElementById('razza').value;
        const livello = document.getElementById('livello').value;
        const background = document.getElementById('background').value;
        const hp = document.getElementById('hp').value;
        const iniziativa = document.getElementById('iniziativa').value;
        const armorClass = document.getElementById('armorclass').value;
        const forza = document.getElementById('forza').value;
        const destrezza = document.getElementById('destrezza').value;
        const costituzione = document.getElementById('costituzione').value;
        const intelligenza = document.getElementById('intelligenza').value;
        const saggezza = document.getElementById('saggezza').value;
        const carisma = document.getElementById('carisma').value;
        const allineamento = document.getElementById('allineamento').value;
        const equipaggiamento = document.getElementById('equipaggiamento').value;
        const carattere = document.getElementById('carattere').value;
        const ideali = document.getElementById('ideali').value;

        // Prepare data for POST request (URL encoded format)
        const formData = new URLSearchParams();
        formData.append('nome', nome);
        formData.append('imageurl', imageurl);
        formData.append('classe', classe);
        formData.append('razza', razza);
        formData.append('livello', livello);
        formData.append('background', background);
        formData.append('hp', hp);
        formData.append('iniziativa', iniziativa);
        formData.append('armorclass', armorClass);
        formData.append('forza', forza);
        formData.append('destrezza', destrezza);
        formData.append('costituzione', costituzione);
        formData.append('intelligenza', intelligenza);
        formData.append('saggezza', saggezza);
        formData.append('carisma', carisma);
        formData.append('allineamento', allineamento);
        formData.append('equipaggiamento', equipaggiamento);
        formData.append('carattere', carattere);
        formData.append('ideali', ideali);

        // Send POST request to Spring Boot backend
        fetch('salvapersonaggio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        }).then(response => { 
            if (response.redirected) {
                    // If redirected, navigate to the success or failure page
                    window.location.href = response.url;
                } else {
                    // Handle non-redirect scenarios if needed
                    return response.text();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            }) ;

    } else {
        errorMessageElement.innerHTML = errorMessage;
    }
}

function getDatiPersonaggio() { 
    fetch('/getpersonaggio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(characterData => {
            const form = document.getElementById('creazionescheda');
            for (let key in characterData) {
                if (characterData.hasOwnProperty(key)) {
                    const field = form.elements[key];
                    if (field) {
                        field.value = characterData[key];
                    }
                }
            }
            const imageUrl = document.getElementById('imageurl').value;
            const characterImg = document.getElementById('character-img');

            if (imageUrl.trim() !== '') characterImg.src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
}

function updateImage() {
    const imageUrl = document.getElementById('imageurl').value;
    const characterImg = document.getElementById('character-img');

    if (imageUrl.trim() !== '') {
        characterImg.src = imageUrl;
    } else {
        alert('Please enter a valid image URL.');
    }
}

window.onload = getDatiPersonaggio;