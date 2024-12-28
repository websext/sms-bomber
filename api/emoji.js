export default !function() {
  let startCP = 0x1F601,
    endCP = 0x1F64F,
    emoji = [];
  
  for(; startCP < endCP; startCP++) {
    emoji.push(String.fromCodePoint(startCP));
  }

  return emoji;
}();