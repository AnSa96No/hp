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

		const strValno1 = $("#my_taizyuu").val();	//文字列を取得
		const strValno2 = $("#my_sintyou").val();	

		const numValno1 = parseInt(strValno1);		//文字列を数値にする
			console.log(numValno1);
		const numValno2 = parseInt(strValno2);
			console.log(numValno2);
		let numValno3 = numValno2/100

		let numValans = (numValno1/(Math.pow(numValno3,2)));//Math.powで乗算(数値、乗算の値)
			console.log(numValans);
		$("#my_ans").text(numValans.toFixed(2));			//BMIを表示

	});

});
