/* Code by David Clews
* http://davidclews.com
*/

/* removeAll
* 
* Removes a list of text values from the DOMNodeList
*
* @param {arguments} A list of string literals, separated by comma
* @return {undefined}
*/
DOMTokenList.prototype.removeAll = function(){
    for(let a=0;
    a<arguments.length;
    a++){
        this.remove(arguments[a]);
    }
  
}
