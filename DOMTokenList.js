/* Code by David Clews
* http://davidclews.com
*/

/* removeAll
* 
* Removes a list of text values from the DOMNodeList
*
* @param {arguments} a An Array of strings, separated by comma
* @return {undefined}
*/
DOMTokenList.prototype.removeAll = function(){
    for(let a=0;
    a<arguments.length;
    a++){
        this.remove(arguments[a]);
    }
  
}
