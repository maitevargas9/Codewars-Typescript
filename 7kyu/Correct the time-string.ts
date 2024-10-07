/*
Description

A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, 
return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

export function timeCorrect(timestring: string | null): string | null {
  if (timestring == "") {
    return "";
  }
  if (
    timestring == null ||
    timestring.split(":").some((v) => v.length !== 2 || isNaN(+v))
  ) {
    return null;
  }

  const date: any = new Date();
  date.setHours(...timestring.split(":"));
  let res = date.toLocaleTimeString("en", { hour12: false });

  if (res.slice(0, 2) == "24") {
    return "00" + res.slice(2);
  }

  return res;
}
