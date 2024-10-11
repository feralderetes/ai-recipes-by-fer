function displayRecipe(response) {
  console.log(response);
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "4a6baff0aba2ofc3b32f2f5atce330d1";
  let prompt = `Generate a cooking recipe with ${userInput.value} as the main ingredient`;
  let context = `You are an expert cook who love to create simple but delicious recipes. Your mission is to generate a short recipe following the user instructions. Your answer should be in HTML format, but please do not include "html" in the text. For example: "User instructions: mince meat" Answer: "<h2>Lasagna</h2><h3>Ingredients</h3><ul>List of ingredients</ul><h3>Instructions</h3><h4>Step 1</h4><p>Instructions for step 1</p><h4>Step 2</h4><p>Instructions for step 2</p><div>💡 Tips</div>". Also please sign at the end of the text with <div><strong>Generated by SheCodes AI</strong></div>.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");

  new Typewriter("#recipe", {
    strings: ["Generating recipe...", "Please wait..."],
    autoStart: true,
    delay: 1,
  });

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
