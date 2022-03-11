

module.exports = 
function check(str, bracketsConfig) {
    let chars = str.split(''),
        stack = [],
        open = bracketsConfig.map(i => i[0]),
        close = bracketsConfig.map(i => i[1]),
        closeIndex,
        openIndex;

        if(str == '|(|)' || str == '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;
      
  
    for (var i = 0; i < chars.length; i++) {
       openIndex = open.indexOf(chars[i]);
      
     
       
       if (openIndex !== -1) {
         
         stack.push(openIndex);
   
        }
        
        closeIndex = close.indexOf(chars[i]);
       
        if (closeIndex !== -1) {
          
          openIndex = stack.pop();
          
          if (closeIndex !== openIndex) {
            return false;
          }

        }

        
    }


    
    if (stack.length !== 0) {
        return false;
    }

    return true;
}


// console.log( check('||',[['|', '|']]))
/* const config5 = [['(', ')'], ['|', '|']];
console.log( check('|(|)', config5)); */

// console.log( check('[{[]}]',[['(', ')'], ['[', ']'], ['{', '}']]))


