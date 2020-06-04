// ToDo: make 3 regexpresion:

/* 
    first: looking for hashtags 
    ex: #lorem, #360deg, #MAG
*/

const firstPattern = /\s[#]{1}[a-zA-Z0-9]+/

/* 
    second: looking for words in text with first letter uppercase
*/

const secondPattern = /\s[A-Z]{1}[a-z]+/

/* 
    thrid: looking for specialCharts !@#$%^&*-=+_?~
    lorem # ipsum - show in this case 
    lorem#lorem - not show in this case 
*/

const thridPattern = /\s[!@#$%^&*-=+_?~]{1}\s/;
