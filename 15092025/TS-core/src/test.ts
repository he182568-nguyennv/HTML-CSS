function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}
 
greet("world");