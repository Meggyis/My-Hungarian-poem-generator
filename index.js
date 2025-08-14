function displayPoem(response) {
    console.log("poem generated");
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});
}
function generatePoem(event){
event.preventDefault();
let instructionInput=document.querySelector("#instruction");
let apiKey="ta7cf76b03d3d0cfof27fb0472606ea4";
let prompt=`Generate a short poem in Hungarian about ${instructionInput.value}.`;
let context="You are a romatic poem expert poet and love to write short poems. Your mission is to write a 4 line poem in basic HTML, without added comments, but display only the generated poem. Below the poem, sign it in the end with `By the SheCodes AI` inside a <strong></strong> element.Don´t use quotation marks and dont write out the word html.  ";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
let poemElement=document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML=`<div class="generating">Generating a Hungarian poem about ${instructionInput.value}</div>`;
console.log("Generating poem...");
console.log(`Prompt:${prompt}`);
console.log(`Context: ${context}`);
axios.get(apiUrl).then(displayPoem);
}
let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);