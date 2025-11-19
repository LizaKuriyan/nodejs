 var buf1 = new Buffer.from("NodeJS is fast", "utf-8");
 console.log(buf1);
 var sliced = buf1.slice(0,6);
 console.log(sliced.toString());
 var buf2 = new Buffer.from("Powerful", "utf-8");
 console.log(buf2);
 var compare = buf1.compare(buf2);
 if(compare< 0) {
   console.log(`"`+buf1+`"` +`comes before ` + buf2+`"`);
} else if(compare === 0) {
   console.log(`"`+buf1 +`"`+` is same as ` + `"`+buf2+`"`);
} else {
   console.log(`"`+buf1 +`"`+` comes after ` + `"`+buf2+`"`);
}
var buf3=buf1.toJSON();
console.log(buf3);