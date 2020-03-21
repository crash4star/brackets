module.exports = function check(str, bracketsConfig) {
    
  arrayFromString = str.split("");

  for(let i = 0; i < arrayFromString.length; i++) {
      for(let j = 0; j < bracketsConfig.length; j++) {
          
          if (arrayFromString[i] == bracketsConfig[j][0] 
          && arrayFromString[i + 1] == bracketsConfig[j][1]) {
              arrayFromString.splice(i, 2);
              i = -1;
          };

          if (arrayFromString.length == 0) {
              return true
          };

      };
  };

  return false;

};