class Wordbox {
    #dictionary;
    #elInput;
    #elAnswer;
    #dictictionary;

    constructor(inputWord, answer){
        this.#elInput = document.getElementById(inputWord);
        this.#elAnswer = document.getElementById(answer);
        this.#dictictionary = new Map();
        this.#initMap(this.#dictictionary);
    }

    get(){
        let word = this.#elInput.value;
        
        let rus = this.#dictictionary.get(word.toLowerCase());

        if(rus){
            this.#elAnswer.innerHTML = rus;
        }else{
            this.#elAnswer.innerHTML = "А нету...";
        }

    }

    #initMap(dict){
        dict.set("humanity", "человечество");
        dict.set("corp", "труп");
        dict.set("troop", "группа");
    }

}