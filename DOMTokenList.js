/* Code by David Clews
* http://davidclews.com
*/

/* removeAll
* 
* Removes an array of text values from the DOMNodeList
*
* @param {array} a An Array of strings, with one or more in each
* @return {undefined}
*/
DOMTokenList.prototype.removeAll = function(a){
  for(let b=0;b<a.length;b++){
    /* allow for multiple class selectors per item */
    let d=a[b].replace(/\s\s+/g, ' ').split(" ");
                        
    for(let c=0;
    c<d.length;
    c++){
        this.remove(d[c]);
    }
  }
}
