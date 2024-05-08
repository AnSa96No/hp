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

		const strValno1 = $("#my_gasorin").val();	//文字列を取得
		const strValno2 = $("#my_kyori").val();	
		const strValno3 = $("#my_nenpi").val();	

		const numValno1 = parseInt(strValno1);		//文字列を数値にする
			console.log(numValno1);
		const numValno2 = parseInt(strValno2);
			console.log(numValno2);
		const numValno3 = parseInt(strValno3);
			console.log(numValno3);

		let numValans = ((strValno1*strValno2)/strValno3);
			console.log(numValans);
		$("#my_ans").text(numValans);			//金額を表示

	});

});
