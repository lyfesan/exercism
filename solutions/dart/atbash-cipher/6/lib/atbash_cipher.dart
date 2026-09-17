class AtbashCipher {
  
  String encode(String s){
    String cipher = "";
    for (var char in s.runes) {
      if(char >= 'a'.codeUnitAt(0) && char <= 'z'.codeUnitAt(0)){
        var codedChar = 'a'.codeUnitAt(0) + 'z'.codeUnitAt(0) - char;
        cipher+=String.fromCharCode(codedChar);
      }
      else if( char >= 'A'.codeUnitAt(0) && char <= 'Z'.codeUnitAt(0)){
        var codedChar = 'A'.codeUnitAt(0) + 'Z'.codeUnitAt(0) - char;
        cipher+=String.fromCharCode(codedChar);
      }
      else cipher+= String.fromCharCode(char);
    }
    return cipher;
  }

  String decode(String s){
    String text="";
    for (var char in s.runes) {
      if(char >= 'a'.codeUnitAt(0) && char <= 'z'.codeUnitAt(0)){
        var originalChar = 'a'.codeUnitAt(0) + 'z'.codeUnitAt(0) - char;
        text+=String.fromCharCode(originalChar);
      }
      else if(char >= 'A'.codeUnitAt(0) && char <= 'Z'.codeUnitAt(0)){
        var codedChar = 'A'.codeUnitAt(0) + 'Z'.codeUnitAt(0) - char;
        text+=String.fromCharCode(codedChar);
      }
      else text+= String.fromCharCode(char);
    }
    return text;
  }
}
