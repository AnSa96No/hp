console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready");

	const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";//アクセスするファイル
	const option = {"responseType": "blob"};	//オプション
	axios.get(url, option).then(res=>{
		console.log("通信成功");
		//データを文字列に変換する
		res.data.text().then(str=>{
			//文字列をJSONに変換する
			const jobj = JSON.parse(str);
			console.table(jobj);	//テーブル形式で確認
			//東京のデータを取得する
			//Arrayは配列なので[]でアクセスする
			console.log(jobj[0].publishingoffice);
			console.log(jobj[0].timeSeries[0].areas[0].area.name);	//東京地方
			$("#msg_1").text(jobj[0].timeSeries[0].areas[0].area.name);
			console.log(jobj[0].timeSeries[0].areas[1].area.name);	//
			//東京地方の天気情報を取得し、jqueryに表示
			console.log(jobj[0].timeSeries[0].areas[0].area.code);
			$("#msg_2").text(jobj[0].timeSeries[0].areas[0].area.code)
			//weatherCorde
			console.log(jobj[0].timeSeries[0].areas[0].weatherCodes[0]);
			let weatheCode = (jobj[0].timeSeries[0].areas[0].weatherCodes[0]);
			let numwc = parseInt(weatheCode);
			// $("#msg_3").text(jobj[0].timeSeries[0].areas[0].weatherCodes[0])
			if(numwc === 100){
				$("#msg_3").text("今の天気:"+"晴れ");
			}else if(numwc === 101){
				$("#msg_3").text("今の天気:"+"晴れ 時々 くもり");
			}else if(numwc === 102){
				$("#msg_3").text("今の天気:"+"晴れ 一時 雨");
			}else if(numwc === 103){
				$("#msg_3").text("今の天気:"+"晴れ 時々 雨");
			}else if(numwc === 104){
				$("#msg_3").text("今の天気:"+"晴れ 一時 雪");
			}else if(numwc === 105){
				$("#msg_3").text("今の天気:"+"晴れ 時々 雪");
			}else if(numwc === 106){
				$("#msg_3").text("今の天気:"+"晴れ 一時 雨か雪");
			}else if(numwc === 107){
				$("#msg_3").text("今の天気:"+"晴れ 時々 雨か雪");
			}else if(numwc === 107){
				$("#msg_3").text("今の天気:"+"晴れ 一時 雨か雷雨");
			}else if(numwc === 110){
				$("#msg_3").text("今の天気:"+"晴れ のち時々くもり");
			}else if(numwc === 111){
				$("#msg_3").text("今の天気:"+"晴れ のち くもり");
			}else if(numwc === 112){
				$("#msg_3").text("今の天気:"+"晴れ のち一時 雨");
			}else if(numwc === 113){
				$("#msg_3").text("今の天気:"+"晴れ のち時々 雨");
			}else if(numwc === 114){
				$("#msg_3").text("今の天気:"+"晴れ のち 雨");
			}else if(numwc === 115){
				$("#msg_3").text("今の天気:"+"晴れ のち一時 雪");
			}else if(numwc === 116){
				$("#msg_3").text("今の天気:"+"晴れ のち時々 雪");
			}else if(numwc === 117){
				$("#msg_3").text("今の天気:"+"晴れ のち 雪");
			}else if(numwc === 118){
				$("#msg_3").text("今の天気:"+"晴れ のち 雨か雪");
			}else if(numwc === 119){
				$("#msg_3").text("今の天気:"+"晴れ のち 雨か雷雨");
			}else if(numwc === 120){
				$("#msg_3").text("今の天気:"+"晴れ 朝夕 一時 雨");
			}else if(numwc === 121){
				$("#msg_3").text("今の天気:"+"晴れ 朝の内一時 雨");
			}else if(numwc === 122){
				$("#msg_3").text("今の天気:"+"晴れ 夕方一時 雨");
			}else if(numwc === 123){
				$("#msg_3").text("今の天気:"+"晴れ 山沿い 雷雨");
			}else if(numwc === 124){
				$("#msg_3").text("今の天気:"+"晴れ 山沿い 雪");
			}else if(numwc === 125){
				$("#msg_3").text("今の天気:"+"晴れ 午後は雷雨");
			}else if(numwc === 126){
				$("#msg_3").text("今の天気:"+"晴れ 昼頃から雨");
			}else if(numwc === 127){
				$("#msg_3").text("今の天気:"+"晴れ 夕方から雨");
			}else if(numwc === 128){
				$("#msg_3").text("今の天気:"+"晴れ 夜は雨");
			}else if(numwc === 129){
				$("#msg_3").text("今の天気:"+"晴れ 夜半から雨");
			}else if(numwc === 130){
				$("#msg_3").text("今の天気:"+"朝の内 霧 後 晴れ");
			}else if(numwc === 131){
				$("#msg_3").text("今の天気:"+"晴れ 明け方 霧");
			}else if(numwc === 132){
				$("#msg_3").text("今の天気:"+"晴れ 朝夕 くもり");
			}else if(numwc === 140){
				$("#msg_3").text("今の天気:"+"晴れ 時々 雨で雷を伴う");
			}else if(numwc === 160){
				$("#msg_3").text("今の天気:"+"晴れ 一時 雪か雨");
			}else if(numwc === 170){
				$("#msg_3").text("今の天気:"+"晴れ 時々 雪か雨");
			}else if(numwc === 181){
				$("#msg_3").text("今の天気:"+"晴れ のち 雪か雨");
			}else if(numwc === 200){
				$("#msg_3").text("今の天気:"+"くもり");
			}else if(numwc === 201){
				$("#msg_3").text("今の天気:"+"くもり 時々 晴れ");
			}else if(numwc === 202){
				$("#msg_3").text("今の天気:"+"くもり 一時 雨");
			}else if(numwc === 203){
				$("#msg_3").text("今の天気:"+"くもり 時々 雨");
			}else if(numwc === 204){
				$("#msg_3").text("今の天気:"+"くもり 一時 雪");
			}else if(numwc === 205){
				$("#msg_3").text("今の天気:"+"くもり 時々 雪");
			}else if(numwc === 206){
				$("#msg_3").text("今の天気:"+"くもり 一時 雨か雪");
			}else if(numwc === 207){
				$("#msg_3").text("今の天気:"+"くもり 時々 雨か雪");
			}else if(numwc === 208){
				$("#msg_3").text("今の天気:"+"くもり 一時 雨か雷雨");
			}else if(numwc === 209){
				$("#msg_3").text("今の天気:"+"霧");
			}else if(numwc === 210){
				$("#msg_3").text("今の天気:"+"くもり のち時々 晴れ");
			}else if(numwc === 211){
				$("#msg_3").text("今の天気:"+"くもり のち 晴れ");
			}else if(numwc === 212){
				$("#msg_3").text("今の天気:"+"くもり のち一時 雨");
			}else if(numwc === 213){
				$("#msg_3").text("今の天気:"+"くもり のち時々 雨");
			}else if(numwc === 214){
				$("#msg_3").text("今の天気:"+"くもり のち 雨");
			}else if(numwc === 215){
				$("#msg_3").text("今の天気:"+"くもり のち時々 雪");
			}else if(numwc === 217){
				$("#msg_3").text("今の天気:"+"くもり のち 雪");
			}else if(numwc === 218){
				$("#msg_3").text("今の天気:"+"くもり のち 雨か雪");
			}else if(numwc === 219){
				$("#msg_3").text("今の天気:"+"くもり のち 雨か雷雨");
			}else if(numwc === 220){
				$("#msg_3").text("今の天気:"+"くもり 朝夕一時 雨");
			}else if(numwc === 221){
				$("#msg_3").text("今の天気:"+"くもり 朝の内一時 雨");
			}else if(numwc === 222){
				$("#msg_3").text("今の天気:"+"くもり 夕方一時 雨");
			}else if(numwc === 223){
				$("#msg_3").text("今の天気:"+"くもり 日中時々 晴れ");
			}else if(numwc === 224){
				$("#msg_3").text("今の天気:"+"くもり 昼頃から雨");
			}else if(numwc === 225){
				$("#msg_3").text("今の天気:"+"くもり 夕方から雨");
			}else if(numwc === 226){
				$("#msg_3").text("今の天気:"+"くもり 夜は雨");
			}else if(numwc === 227){
				$("#msg_3").text("今の天気:"+"くもり 夜半から雨");
			}else if(numwc === 228){
				$("#msg_3").text("今の天気:"+"くもり 昼頃から雪");
			}else if(numwc === 229){
				$("#msg_3").text("今の天気:"+"くもり 夕方から雪");
			}else if(numwc === 230){
				$("#msg_3").text("今の天気:"+"くもり 夜は雪");
			}else if(numwc === 231){
				$("#msg_3").text("今の天気:"+"くもり海上海岸は霧か霧雨");
			}else if(numwc === 240){
				$("#msg_3").text("今の天気:"+"くもり 時々雨で 雷を伴う");
			}else if(numwc === 250){
				$("#msg_3").text("今の天気:"+"くもり 時々雪で 雷を伴う");
			}else if(numwc === 260){
				$("#msg_3").text("今の天気:"+"くもり 一時 雪か雨");
			}else if(numwc === 270){
				$("#msg_3").text("今の天気:"+"くもり 時々 雪か雨");
			}else if(numwc === 281){
				$("#msg_3").text("今の天気:"+"くもり のち 雪か雨");
			}else if(numwc === 300){
				$("#msg_3").text("今の天気:"+"雨");
			}else if(numwc === 301){
				$("#msg_3").text("今の天気:"+"雨 時々 晴れ");
			}else if(numwc === 302){
				$("#msg_3").text("今の天気:"+"雨 時々 止む");
			}else if(numwc === 303){
				$("#msg_3").text("今の天気:"+"雨 時々 雪");
			}else if(numwc === 304){
				$("#msg_3").text("今の天気:"+"雨か雪");
			}else if(numwc === 306){
				$("#msg_3").text("今の天気:"+"大雨");
			}else if(numwc === 307){
				$("#msg_3").text("今の天気:"+"風雨共に強い");
			}else if(numwc === 308){
				$("#msg_3").text("今の天気:"+"雨で暴風を伴う");
			}else if(numwc === 309){
				$("#msg_3").text("今の天気:"+"雨 一時 雪");
			}else if(numwc === 311){
				$("#msg_3").text("今の天気:"+"雨 のち 晴れ");
			}else if(numwc === 313){
				$("#msg_3").text("今の天気:"+"雨 のち くもり");
			}else if(numwc === 314){
				$("#msg_3").text("今の天気:"+"雨 のち時々 雪");
			}else if(numwc === 315){
				$("#msg_3").text("今の天気:"+"雨 のち 雪");
			}else if(numwc === 316){
				$("#msg_3").text("今の天気:"+"雨か雪 のち 晴れ");
			}else if(numwc === 317){
				$("#msg_3").text("今の天気:"+"雨か雪 のち くもり");
			}else if(numwc === 320){
				$("#msg_3").text("今の天気:"+"朝の内雨 のち 晴れ");
			}else if(numwc === 321){
				$("#msg_3").text("今の天気:"+"朝の内雨 のち くもり");
			}else if(numwc === 322){
				$("#msg_3").text("今の天気:"+"雨 朝晩一時 雪");
			}else if(numwc === 323){
				$("#msg_3").text("今の天気:"+"雨 昼頃から 晴れ");
			}else if(numwc === 324){
				$("#msg_3").text("今の天気:"+"雨 夕方から 晴れ");
			}else if(numwc === 325){
				$("#msg_3").text("今の天気:"+"雨 夜は晴");
			}else if(numwc === 326){
				$("#msg_3").text("今の天気:"+"雨 夕方から雪");
			}else if(numwc === 327){
				$("#msg_3").text("今の天気:"+"雨 夜は雪");
			}else if(numwc === 328){
				$("#msg_3").text("今の天気:"+"雨 一時強く降る");
			}else if(numwc === 329){
				$("#msg_3").text("今の天気:"+"雨 一時 みぞれ");
			}else if(numwc === 340){
				$("#msg_3").text("今の天気:"+"雪か雨");
			}else if(numwc === 350){
				$("#msg_3").text("今の天気:"+"雨で雷を伴う");
			}else if(numwc === 361){
				$("#msg_3").text("今の天気:"+"雪か雨 のち 晴れ");
			}else if(numwc === 371){
				$("#msg_3").text("今の天気:"+"雪か雨 のち くもり");
			}else if(numwc === 400){
				$("#msg_3").text("今の天気:"+"雪");
			}else if(numwc === 401){
				$("#msg_3").text("今の天気:"+"雪 時々 晴れ");
			}else if(numwc === 402){
				$("#msg_3").text("今の天気:"+"雪 時々止む");
			}else if(numwc === 403){
				$("#msg_3").text("今の天気:"+"雪 時々 雨");
			}else if(numwc === 405){
				$("#msg_3").text("今の天気:"+"大雪");
			}else if(numwc === 406){
				$("#msg_3").text("今の天気:"+"風雪強い");
			}else if(numwc === 407){
				$("#msg_3").text("今の天気:"+"暴風雪");
			}else if(numwc === 409){
				$("#msg_3").text("今の天気:"+"雪 一時 雨");
			}else if(numwc === 411){
				$("#msg_3").text("今の天気:"+"雪 のち 晴れ");
			}else if(numwc === 413){
				$("#msg_3").text("今の天気:"+"雪 のち くもり");
			}else if(numwc === 414){
				$("#msg_3").text("今の天気:"+"雪 のち 雨");
			}else if(numwc === 420){
				$("#msg_3").text("今の天気:"+"朝の内雪 のち 晴れ");
			}else if(numwc === 421){
				$("#msg_3").text("今の天気:"+"朝の内雪 のち くもり");
			}else if(numwc === 422){
				$("#msg_3").text("今の天気:"+"雪 昼頃から雨");
			}else if(numwc === 423){
				$("#msg_3").text("今の天気:"+"雪 夕方から雨");
			}else if(numwc === 424){
				$("#msg_3").text("今の天気:"+"雪 夜半から雨");
			}else if(numwc === 425){
				$("#msg_3").text("今の天気:"+"雪 一時強く降る");
			}else if(numwc === 426){
				$("#msg_3").text("今の天気:"+"雪 のち みぞれ");
			}else if(numwc === 427){
				$("#msg_3").text("今の天気:"+"雪 一時 みぞれ");
			}else if(numwc === 450){
				$("#msg_3").text("今の天気:"+"雪で雷を伴う");
			};

			//weathers
			console.log(jobj[0].timeSeries[0].areas[0].weathers[0]);
			$("#msg_4").text(jobj[0].timeSeries[0].areas[0].weathers[0]);
			//winds
			console.log(jobj[0].timeSeries[0].areas[0].winds[0]);
			$("#msg_5").text(jobj[0].timeSeries[0].areas[0].winds[0]);
		});
	}).catch(err=>{
		console.log("通信失敗");
	});
	
});