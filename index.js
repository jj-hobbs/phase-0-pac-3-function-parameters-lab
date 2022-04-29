function introduction(name) {
    console.log("Hi, my name is ${name}");
}
introduction(Justin);

function introductionWithLanguage(name, language) {
    console.log("Hi, my name is ${name} and I am learning to program in ${language}");
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    returns "Hi, my name is ${name} and I am learning to program in ${language}";
}