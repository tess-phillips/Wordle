export const getDefinition = async (randomWord) => {
    try {
        const definitionUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        const response = await fetch(definitionUrl);
  
      if (response.ok) {
        const data = await response.json();
        // console.log(data."definition")
        const meaning = data[0].meanings;
        const definitionArray = meaning[0].definitions
        const firstDef = definitionArray[0].definition;
        return firstDef;
      } else {
        throw new Error(response.status);
      }
    } 
    catch (error) {
      console.log(error);
      console.log("word to remove:", randomWord)
    }
  };
  