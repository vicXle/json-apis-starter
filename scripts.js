function validateData(e){
    //prevent default form submission
    e.preventDefault();

    // get the word that the user entered in the input, store in variable named word
    // TO DO

    word = word.trim();

    if(word.length < 1 || parseInt(word)){
        document.getElementById("user-word").innerHTML = "Please enter a word before clicking the button";
        resetDisplay();
    }else{
        // if the word is valid, let's make our call to the function that works with the API
        // TO DO
    }
}

function getWord(word){

    // places on the page used for output
    // TO DO

    // un-hide the output section
    // TO DO

    // clear the list of any previous output
    resetDisplay();

    // create ajax object
    const xhr = new XMLHttpRequest();

    // set withCredentials property on ajax object to true (we will access with a key)
    xhr.withCredentials = true;

    // ready state change event listener
    xhr.addEventListener("readystatechange", function () {
        // when we get a response...
        if (this.readyState === this.DONE) {
            // log the returned text to the console
            // TO DO	

            // parse the response into JSON
            // TO DO

            // check to see if an error was returned from the call
            if(wordInfo.hasOwnProperty("query") || wordInfo.success === false){
                // display an error message to the user
                userWord.innerHTML = `<strong>${word}</strong> is not a valid word`;

                // clear the list to allow for an error message to be displayed
                resetDisplay();

                // ask the user to enter a valid word
                display.innerHTML = "<li>Please enter a new word and try again</li>";
            }else{
                // this means we got our data back and can display it from the JSON
                // display the word entered on the page
                // TO DO
                
                // clear the list to allow for new definitions to be displayed (use the helper function)
                // TO DO

                // iterate through array of returned definitions and add to string for output
                // TO DO
                    // each definition is displayed in a list item
                    // TO DO
                

                // clear the user input to make room for another word
                resetInput();
            }
        }
    });

    // start of endpoint to API
    const PATH = "https://wordsapiv1.p.rapidapi.com/words/";

    // full path of endpoint to get a definition
    let URL = `${PATH}${word}`;

    // open the connection with the ajax object
    xhr.open("GET", URL);

    // set the required headers on the object
    xhr.setRequestHeader("x-rapidapi-key", "TO DO"); // TO DO - ADD YOUR API KEY HERE
    xhr.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");

    // send the request to the API
    xhr.send();
}

// this helper function clears out the input and output for the user word
function resetInput(){
    document.getElementById("my-word").value = "";
    document.getElementById("my-word").focus(); 

}

// this helper function clears out the list where we display definitions or errors
function resetDisplay(){
    document.getElementById("display-word-info").innerHTML = "";
    // document.getElementById("recursive").innerHTML = "";
}

//attach event handler to button in form
document.getElementById("get-defs").addEventListener("click", validateData);

/* Example of returned JSON data for the word "no"
    {
        "word":"no",
        "results":[
            {
                "definition":"a radioactive transuranic element synthesized by bombarding curium with carbon ions; 7 isotopes are known",
                "partOfSpeech":"noun",
                "synonyms":[
                    "atomic number 102",
                    "nobelium"
                ],
                "typeOf":[
                    "chemical element",
                    "element"
                ]
            },
            {
                "definition":"referring to the degree to which a certain quality is present",
                "partOfSpeech":"adverb",
                "synonyms":[
                    "no more"
                ],
                "examples":[
                    "he was no heavier than a child"
                ]
            },
            {
                "definition":"a negative",
                "partOfSpeech":"noun",
                "typeOf":[
                    "negative"
                ],
                "antonyms":[
                    "yes"
                ],
                "examples":[
                    "his no was loud and clear"
                ]
            },
            {
                "definition":"(quantifier) used with either mass nouns or plural count nouns for indicating a complete or almost complete lack or zero quantity of",
                "partOfSpeech":"adjective",
                "similarTo":[
                    "nary",
                    "none",
                    "zero"
                ],
                "antonyms":[
                    "all",
                    "some"
                ],
                "examples":[
                    "we have no bananas",
                    "no eggs left and no money to buy any",
                    "have you no decency?",
                    "did it with no help",
                    "I'll get you there in no time"
                ]
            }
        ],
        "pronunciation":{
            "all":"noʊ"
        },
        "frequency":6.78
    }
 */