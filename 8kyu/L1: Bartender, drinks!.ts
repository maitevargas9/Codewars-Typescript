/*
Description

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	              Output
"Jabroni"	          "Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	      "Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	      "Your tax dollars"
"Rapper"	          "Cristal"
anything else	      "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, 
then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

export function getDrinkByProfession(profession: string): string {
  let result = "";

  switch (profession.toLowerCase()) {
    case "jabroni":
      result = "Patron Tequila";
      break;
    case "school counselor":
      result = "Anything with Alcohol";
      break;
    case "programmer":
      result = "Hipster Craft Beer";
      break;
    case "bike gang member":
      result = "Moonshine";
      break;
    case "politician":
      result = "Your tax dollars";
      break;
    case "rapper":
      result = "Cristal";
      break;
    default:
      result = "Beer";
      break;
  }

  return result;
}
