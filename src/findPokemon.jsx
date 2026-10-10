export function findPokemon(pokeName) {
  let temp = pokeName.toLowerCase();
  temp = temp.replace(/'/g, "");
  temp = temp.replace(/\./g, " ");     
  temp = temp.replace(/\s+/g, " ");     
  temp = temp.trim();

  if (temp.includes("mega")) {
    temp = temp.split(" ");

    if (temp.length > 2) {
      const position = temp.indexOf("mega");
      [temp[position], temp[1]] = [temp[1], temp[position]];
      temp = temp.join("-");
    } else {
      const withoutMega = temp.filter(word => word !== "mega");
      temp = [...withoutMega, "mega"].join("-");
    }
    return temp;
  }

  if (temp.includes(" ")) {
    temp = temp.split(" ").join("-");
  }

  return temp;
}