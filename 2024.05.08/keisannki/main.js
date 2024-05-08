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
	$("#my_btn").click(()=>{
		console.log("計算をする");

		const strVal = $("#my_input").val();	//文字列を取得

		let strVal2 = $("#my_select").val();	//文字列を取得

		const numVal =parseInt(strVal);		//文字列を数値にする
		let numVal2 =parseInt(strVal2);		//文字列を数値にする

		let numVal3=(numVal*(numVal2*0.01));	//税率金額を計算

		$("#my_tax").text(numVal3);			//税率金額だけを表示
		$("#my_total").text(numVal+numVal3);//税率金額＋金額を表示

	});

});

//思考の残骸
// ("#my_btn").click(()=>{
// 	console.log("計算をする")
// 	const strVal = $("#my_input").val();	//文字列を取得
// 	//const strVal = $("").val();	//文字列を取得

// 	let strVal2 = $("#my_select").val();	//文字列を取得
// //	let strVal3 =$("#my_zei10").val();

// 	const numVal =parseInt(strVal);		//文字列を数値にする
// 	let numVal2 =parseInt(strVal2);		//文字列を数値にする
// //	let numVal4=parseInt(strVal3);

// //	console.log(numVal*(numVal*0.01));	//これを計算する
// 	let numVal3=(numVal*(numVal2*0.01));
// //	let numVal5=(numVal*(numVal4*0.01));

// 	//console.log(numVal2*0.01);
// //	console.log(numVal3+numVal);
// //	console.log(numVal5+numVal);

// 	$("#my_tax").text(numVal3);
// 	$("#my_total").text(numVal+numVal3);//8%

// //	$("#my_tax").text(numVal5);//10%
// //	$("#my_total").text(numVal+numVal5);


// });