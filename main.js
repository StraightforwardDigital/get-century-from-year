function century(year) {
  //Divide by 100 to get the right output decimal place
  //Then round up to the next integer, to make sure numbers not divisible by 10 fall into the correct century
  return Math.ceil(year / 100);
}