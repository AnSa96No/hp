console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");


//画像を乱数で変える
let ran = Math.random();
console.log("乱数",ran);

//0~6までの整数を取り出したい
let nam = ran * 7;
console.log("nam:",nam);

let nam2 = Math.floor(nam);
console.log("nam2", nam2);

$("#my_omg").attr("src", "./images/om_0.png");

//画像のパスを作る
let path = "./images/om_" + nam2 + ".png";

//画像を変える
$("#my_omg").attr("src" ,path);

});

//--buttnをクリックしたらおみくじの内容が変わる
let i = 1
$("#omikuzi").click(function(){
	ran = Math.random();
	nam = ran * 7;
	nam2 = Math.floor(nam);
	path = "./images/om_" + nam2 + ".png";
	$("#my_omg").attr("src" ,path);
	$("#kaisuu").text( i++ + "回");
});