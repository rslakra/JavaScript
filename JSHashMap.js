/**
  * The code is implemented as of HashMap in core java for java script.
  * Create On: 2008/06/13
  * Create By: Rohtash Singh (rohtash.lakra@devamatre.com)
  */
function JSHashMap() {
	//attributes
	this.keys = new Array(); // Keys
    this.values = new Array(); // Values
        
	//behaviours
    this.put = put;
    this.get = get;
    this.size = size;  
    this.clear = clear;
    this.keySet = keySet;
    this.valueSet = valueSet;
    this.print = print;   // returns a string with all keys and values in map.
    this.contains = contains;
    this.remove = remove;
}

/* This method puts values in hash map */
function put(key, value) {
	var index = this.contains(key);
    if(index == -1) {
        this.keys.push(key);
        
        var objValues = new Array();
        objValues.push(value);
        
        this.values.push(objValues);
    } else {
    	this.values[index].push(value);
        //this.values[index] = value;
    }
}

/* This method returns values in hash map */
function get(key) {
    var result = null;
    var index = this.contains(key);
    if(index != -1) {   
        result = this.values[index];
    }
    return result;
}

/* This method removes values in hash map */
function remove(key) {
    var result = null;
    var index = this.contains(key);
    if(index != -1) {
        this.keys = this.keys.removeAt(index);
        this.values = this.values.removeAt(index);
    }  
    return;
}

/* This method returns the size of hash map */
function size() {
    return (this.keys.length);  
}

/* This method makes the map empty */
function clear() {
    for( var i = 0; i < this.keys.length; i++ ) {
        this.keys.pop(); 
		this.values.pop();   
    }
}

/* This method returns the keys array */
function keySet() {
    return (this.keys);
}

/* This method returns the values array */
function valueSet() {
    return (this.values);   
}

/*
// This method prints values of map in key, value pair
function print() {
    var result = "";
    for( var i = 0; i < this.keys.length; i++ ) {
        result += "Key: " + this.keys[i] + ", Value: " + this.values[i] + "\n";
    }
    return result;
}
*/

/* This method prints values of map in key, value pair */
function print() {
    var result = "";
    for( var i = 0; i < this.keys.length; i++ ) {
        result += "Key: " + this.keys[i] + ", Values: ";
        var objValues = this.values[i];
        for(var j = 0; j < objValues.length; j++) {
        	result += " " +this.objValues[i];
         }
        result += "\n";
    }
    return result;
}

/* This method returns index of the key if key exists in the map otherwise returns -1 */
function contains(key){
    var result = -1;
    for( var i = 0; i < this.keys.length; i++ ) {
        if( this.keys[i] == key ) {
            result = i;
            break;
        }
    }
    return result;
}

/* This method removes element of map at the selected index */
function removeAt(index){
	var firstHalf = this.slice(0, index);
	var secondHalf = this.slice(index + 1);
	return(firstHalf.concat(secondHalf));
}

Array.prototype.removeAt = removeAt;