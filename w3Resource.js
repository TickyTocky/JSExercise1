/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// W3Resource Exercise

// Exercise 1
const object8 = {
  name: 'Aditya',
  sclass: 12,
  job: "teacher"
};

console.log(Object.keys(object8));

// Exercise 2
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  
};

console.log(student);
delete student.rollno;
console.log(student);

// Exercise 3
Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);

// Exercise 4 
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
{
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } 
else
    {
     console.log("You still need to read " + book);
    }
}

// Exercise 5
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log('volume =', cyl.Volume().toFixed(4));


// Exercise 8
window.setInterval(function(){

 var today = new Date();
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 console.log(h + " : " + m + " : " + s);
 }, 1000);

// Example 9
function circle(radius)
{
    this.radius = radius;
    
    // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    
    // perimeter method
    this.perimeter = function ()
    {
        return 2 * Math.PI * this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

// Example 10
var library = [
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      id: 1254
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      id: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      id: 3245
  }];

var i,j,temp;
var n=library.length;

for(j=0;j<n-1;j++)
 {
   for(i=0;i<n-j-1;i++)
     {
       if(library[i].id < library[i+1].id)
         {
           temp=library[i+1];
           library[i+1]=library[i];
           library[i]=temp;
         }
     }
 }
console.log(library);

// Exercise 14
const object9 = {
 name: 'abhishek',
 company: 'ibm',
 id: 1234567
};
console.log(Object.values(object9));

// Exercise 11
function all_properties(obj) 
{
 return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));

// Exercise 7
var x = "Aditya";
var i, j, len = x.length;
var substr = [];

console.log(len);

for(i = 0; i < len; i++)
{
   for(j= i + 1; j <= len; j++)
   {
      substr.push(x.substring(i,j));
   }
}
console.log(substr);

// Exercise 13
function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Aditya")));

// Exercise 15
var obj = {Name:"Jack",Color:"red"};
var pair = [], val = [], key = [];

val = Object.values(obj);
key = Object.keys(obj);
var len = val.length;
var i = 0;
for(i = 0; i < len; i++)
 {
   pair[i] = [key[i], val[i]];
 }
console.log(pair);

// Exercise 16
var obj = {Name:"Jack",Color:"red"};
var pair = [], val = [], key = [];

val = Object.values(obj);
key = Object.keys(obj);
var len = val.length;
var i = 0;
for(i = 0; i < len; i++)
 {
   pair[i] = [val[i], key[i]];
 }
console.log(pair);

// Exercise 17
function hasKey(obj, key) 
{
    return obj != null && hasOwnProperty.call(obj, key);
}
console.log(hasKey({name: "Aditya", subject: "Java", color: "blue"}, "subject"));








































