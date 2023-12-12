import paragraph from "../api/paragraph.js";
import emoji from "../api/emoji.js";
import joke from "../api/joke.js";
import wishes from "../api/wishes.js";

const domains = ["com", "in", "gov", "org", "net", "go"];
const identifiers = [
	"@modassir",
	"@gmail",
	"@yahoo",
	"@facebook",
	"@twitter",
	"@bomber",
	"@random",
	"@instagram"
];

var construct, commons = {paragraph, emoji, joke, wishes};

const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const NUMBER = "1234567890";

export default class randomThreads {
	constructor() {
		construct=this;
		$.each(commons, function(common, src) {
			construct[common]=function() {
				return src[Math.floor(Math.random() * src.length)];
			};
		});
	};
	email=function() {
		var i=0, random="", str=ALPHA.split(""), identifier;
		for(; i < 20; i++) {
			random+=str[Math.floor(Math.random() * str.length)];
		}
		identifier=identifiers[Math.floor(Math.random() * identifiers.length)];
		return (random + identifier).concat(".com");
	};
	number=function() {
		var i=0,
			random="+91", first=[5,6,7,8,9], num=NUMBER.split("");
		random+=first[Math.floor(Math.random() * first.length)];
		for(; i < 9; i++) {
			random+=num[Math.floor(Math.random() * num.length)];
		}
		return random;
	};
	otp=function() { return parseInt(Math.random() * 10000000) };
	link=function() {
		var i=0, url="https://www.", char=ALPHA.split("");
		for(; i < 15; i++) {
			url+=char[Math.floor(Math.random() * char.length)];
		}
		return (url+"."+domains[Math.floor(Math.random() * domains.length)]);
	};
};