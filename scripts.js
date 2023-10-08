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
    // TO DO

    // set withCredentials property on ajax object to true (we will access with a key)
    // TO DO

    // ready state change event listener
    // TO DO
        // when we get a response...
        // TO DO
            // log the returned text to the console
            // TO DO	

            // parse the response into JSON
            // TO DO

            // check to see if an error was returned from the call
            // TO DO
                // display an error message to the user
                // TO DO

                // clear the list to allow for an error message to be displayed
                // TO DO

                // ask the user to enter a valid word
                // display.innerHTML = "<li>Please enter a new word and try again</li>";
            // TO DO
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
    // TO DO

    // full path of endpoint to get a definition
    // TO DO

    // open the connection with the ajax object
    // TO DO

    // set the required headers on the object
    // xhr.setRequestHeader("x-rapidapi-key", "TO DO"); // TO DO - ADD YOUR API KEY HERE
    // TO DO

    // send the request to the API
    // TO DO
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
