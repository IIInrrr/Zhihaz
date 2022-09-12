"use strict";
let mainBtn = document.querySelector("button");
console.log(mainBtn);
mainBtn.addEventListener("click", function () {
	alert("lol");
	console.log("lol");
});
let myname = "Aiesha";
let surname = " Rocksan";

console.log(myname + surname);
typeof null;
function Plus(a, b) {
	a + b;
}
console.log(Plus(6, 4));
let obj = {
	name: "ali",
	SayHello() {
		console.log(obj.name);
	},
};
obj.SayHello();
