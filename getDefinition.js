export const getDefinition = async (randomWord) => {
    try {
        console.log(randomWord)
        const definitionUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
        const response = await fetch(definitionUrl);
  
      if (response.ok) {
        const data = await response.json();
        // console.log(data."definition")
        const meaning = data[0].meanings;
        const definition = meaning[0].definitions
        console.log(definition);
  
        return { definition };
      } else {
        throw new Error(response.status);
      }
    } 
    catch (error) {
      console.log(error);
    }
  };
  