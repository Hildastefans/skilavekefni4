
/** CARDS **/

/** Finna HTML elementin */
var myDiv = document.querySelector ("#cardsDiv");

var addCardButton = document.querySelector ("#addCardButton");
var refreshCardsButton = document.querySelector ("#refresh");
var clearInputsButton = document.querySelector ("#clearButton");


var pictureInput = document.querySelector ("#picture");
var headlineInput = document.querySelector ("#headline");
var textInput = document.querySelector ("#text");
var button1Input = document.querySelector ("#button1");
var button2Input = document.querySelector ("#button2");
var weatherTextInput = document.querySelector ("#weatherText");
var weatherIconInput = document.querySelector ("#weatherIcon");

/** Búa til array til að geyma kortin, það er bara notað ef valið er að teikna öll kortin aftur með því að smella á refresh **/
var cards = [] // array af kortum

/** functions **/
var displayAllCards = function(){
    myDiv.innerHTML = ""; // Tæma það sem er í div

    for(var i = 0; i<cards.length;i++){
        var card = cards[i]
        displayCard(card)
    }
}

var displayCard = function(card){
    /** bæta við div-ið auka korti */
        myDiv.innerHTML += `
        <div class= "card" >
            <img src="${card.photo}" />
            <h1>${card.title}</h1>
            <p> ${card.subText}</p>
            <button>${card.buttonText1}</button>
            <button>${card.buttonText2}</button>
            <p><span class="forecast">${card.weatherForecastText}</span>${card.weatherForecastSvg}</p>
        </div>
        `   
}

/** Þegar kallað í þetta fall þá hreinsa úr öllum input fieldum */
var clearInputs = function() {
    headlineInput.value = ''
    pictureInput.value = ''
    textInput.value = ''
    button1Input.value = ''
    button2Input.value = ''
    weatherTextInput.value = ''
    weatherIconInput.value = ''
}

/** tekur  gildi úr svæðunum og bý til kort (ekki verið að birta það hér) */

// Ef fyllt er í öll svæðin þá skilar þetta fall true en annars setja missing stíl á input-ið
var validateCard = function() {
    var isValid = true
    
    // Skoða hvort búið sé að skrifa eitthvað í headlineInput
    if (headlineInput.value.length === 0) { 
        headlineInput.classList.add("missing")
        isValid = false
    } else {
        headlineInput.classList.remove("missing")
    }
    if (pictureInput.value.length === 0) { 
        pictureInput.classList.add("missing")
        isValid = false
    } else {
        pictureInput.classList.remove("missing")
    }
    if (textInput.value.length === 0) { 
        textInput.classList.add("missing")
        isValid = false
    } else {
        textInput.classList.remove("missing")
    }
    if (button1Input.value.length === 0) { 
        button1Input.classList.add("missing")
        isValid = false
    } else {
        button1Input.classList.remove("missing")
    }
    if (button2Input.value.length === 0) { 
        button2Input.classList.add("missing")
        isValid = false
    } else {
        button2Input.classList.remove("missing")
    }
    if (weatherTextInput.value.length === 0) { 
        weatherTextInput.classList.add("missing")
        isValid = false
    } else {
        weatherTextInput.classList.remove("missing")
    }
    if (weatherIconInput.value.length === 0) { 
        weatherIconInput.classList.add("missing")
        isValid = false
    } else {
        weatherIconInput.classList.remove("missing")
    }

    return isValid
}

var makeCard = function() {
    // Ef fyllt er í öll svæðin þá búa til kort en annars setja missing stíl á input-ið
    if (headlineInput.value.length === 0) { 
        headlineInput.classList.add("missing")
    } else {
        headlineInput.classList.remove("missing")
    }

    var card = {
        title: headlineInput.value,
        photo: pictureInput.value,
        subText: textInput.value,
        buttonText1: button1Input.value,
        buttonText2: button2Input.value,
        weatherForecastText: weatherTextInput.value,
        weatherForecastSvg: weatherIconInput.value,
    }
    return card
}

var onAddCardButtonClick = function() {
    var isValid = validateCard()

    if (isValid) { // Ef fyllt er út í alla reiti þá kemur true úr validateCard fallinu og þá ætla ég að búa til kort og teikna það
        var card = makeCard()  
        clearInputs() // Get hreinsað fieldin áður en kortið er birt því ekki lesið úr þeim þegar kortið er teiknað
        displayCard(card) // Birta öll kortin
        
        cards.push(card) // Bæta kortinu í arrayið af kortum til að teikna það ef valið er að teikna öll aftur
    }
}

var onRefreshCardsButtonClick = function() {
    displayAllCards()
}

var onClearInputsButtonClick = function() {
    clearInputs()
}

/** functions endar**/

button1.onbuttonclick = function(e){
    return alert("Já, svo förum við lengra með næsta verkefni!")
  }


/** Tengja að það sé kallað í addCard þegar smellt á addButtonCard hnappinn */
addCardButton.onclick = onAddCardButtonClick;
refreshCardsButton.onclick = onRefreshCardsButtonClick;
clearInputsButton.onclick = onClearInputsButtonClick;

/** Búa til eitt kort */
var card = {
    title: "Hong Kong",
    photo: "https://www.s-ge.com/sites/default/files/cserver/styles/sge_header_xl/streamy/company/images/Hongkong-Fotolia-48687313-rabbit75-fot-282451.jpg?itok=Ejk5mqSH",
    subText: "Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive.",
    buttonText1: "Secret Spots",
    buttonText2: "Beaches",
    weatherForecastText: "28° sunny; humid",
    weatherForecastSvg: `<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.4983 45.3512C20.7575 45.3512 13.647 38.2407 13.647 29.4999C13.647 20.7574 20.7575 13.647 29.4983 13.647C38.2391 13.647 45.3496 20.7591 45.3496 29.4999C45.3513 38.2407 38.2391 45.3512 29.4983 45.3512ZM29.4983 15.3399C21.692 15.3399 15.34 21.692 15.34 29.4999C15.34 37.3062 21.692 43.6583 29.4983 43.6583C37.3046 43.6583 43.6566 37.3062 43.6566 29.4999C43.6583 21.692 37.3063 15.3399 29.4983 15.3399Z" fill="black"/>
    <path d="M29.4983 8.43438C29.031 8.43438 28.6518 8.05515 28.6518 7.58789V0.846485C28.6518 0.379225 29.031 0 29.4983 0C29.9655 0 30.3448 0.379225 30.3448 0.846485V7.58789C30.3448 8.05684 29.9672 8.43438 29.4983 8.43438Z" fill="black"/>
    <path d="M29.4983 58.9998C29.031 58.9998 28.6518 58.6206 28.6518 58.1533V51.4119C28.6518 50.9447 29.031 50.5654 29.4983 50.5654C29.9655 50.5654 30.3448 50.9447 30.3448 51.4119V58.1533C30.3448 58.6206 29.9672 58.9998 29.4983 58.9998Z" fill="black"/>
    <path d="M7.58789 30.3465H0.846485C0.379225 30.3465 0 29.9673 0 29.5C0 29.0328 0.379225 28.6536 0.846485 28.6536H7.5862C8.05346 28.6536 8.43268 29.0328 8.43268 29.5C8.43268 29.9673 8.05515 30.3465 7.58789 30.3465Z" fill="black"/>
    <path d="M58.1518 30.3465H51.4104C50.9432 30.3465 50.5639 29.9673 50.5639 29.5C50.5639 29.0328 50.9432 28.6536 51.4104 28.6536H58.1518C58.6191 28.6536 58.9983 29.0328 58.9983 29.5C58.9983 29.9673 58.6191 30.3465 58.1518 30.3465Z" fill="black"/>
    <path d="M14.0077 14.849C13.791 14.849 13.5743 14.7661 13.4084 14.6019L8.64097 9.83784C8.31084 9.50771 8.31084 8.97104 8.64097 8.64091C8.9711 8.31078 9.50777 8.31078 9.8379 8.64091L14.6053 13.4049C14.9354 13.7351 14.9354 14.2717 14.6053 14.6019C14.4411 14.7678 14.2244 14.849 14.0077 14.849Z" fill="black"/>
    <path d="M49.7615 50.6078C49.5448 50.6078 49.3281 50.5248 49.1622 50.3606L44.3948 45.5915C44.0647 45.2614 44.0647 44.7247 44.3948 44.3946C44.7249 44.0644 45.2616 44.0644 45.5917 44.3946L50.3591 49.1637C50.6893 49.4938 50.6893 50.0305 50.3591 50.3606C50.1949 50.5248 49.9782 50.6078 49.7615 50.6078Z" fill="black"/>
    <path d="M9.24028 50.6078C9.02358 50.6078 8.80688 50.5248 8.64097 50.3606C8.31084 50.0305 8.31084 49.4938 8.64097 49.1637L13.4084 44.3946C13.7385 44.0644 14.2752 44.0644 14.6053 44.3946C14.9354 44.7247 14.9354 45.2614 14.6053 45.5915L9.8379 50.3606C9.67199 50.5248 9.45529 50.6078 9.24028 50.6078Z" fill="black"/>
    <path d="M44.9941 14.849C44.7774 14.849 44.5607 14.7661 44.3948 14.6019C44.0647 14.2717 44.0647 13.7351 44.3948 13.4049L49.1622 8.64091C49.4923 8.31078 50.029 8.31078 50.3591 8.64091C50.6893 8.97104 50.6893 9.50771 50.3591 9.83784L45.5917 14.6019C45.4275 14.7678 45.2108 14.849 44.9941 14.849Z" fill="black"/>
    </svg>
    `,
}

/** Bæta kortinu sem á að koma strax í arrayið af kortum */
cards.push(card) // Bæta við fyrsta kortinu
/** svona kallar maður á function **/
displayCard(card)



