module.exports = function check(str, bracketsConfig) {

  if ( str.length == 0 || bracketsConfig.length == 0 ) 
 	return false;

  var regexp = ''; 
	  
  for (let i=0; i<bracketsConfig.length; i++) {
    for (let j=0; j<bracketsConfig[i].length; j++) {
      
      regexp += bracketsConfig[i][j].match(/\d/) ?
	  bracketsConfig[i][j] : '\\' + bracketsConfig[i][j];
      
    }
    
    if (i != bracketsConfig.length-1) {
	      regexp += '|';
    }
  }

  regexp = new RegExp(regexp, 'g');
  
  while ( str.search(regexp) >= 0 ) {
    str = str.replace(regexp,'');
  }
	
  return str.length > 0 ? false : true
}