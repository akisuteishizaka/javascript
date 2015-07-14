// omikuji.js
// taiti
// 20150714

(function() {
	"use script";
	document.getElementById('btn').addEventListener('click', function() {
		// 0 - n
		// Math.floor(Math.random() ? (n + 1))　公式
		// 今回　0 - 3までの乱数を表示させる場合
		// Math.floor(Math.random() * 4)
		// これで0-3の乱数が表示される
		var results = ['大吉','中吉','小吉','末吉','弱凶'];
		var result = Math.floor(Math.random() * results.length);
		// document.getElementById('result').innerHTML = 'hit';
		document.getElementById('result').innerHTML = results[result];
	});

	document.getElementById('btn').addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	document.getElementById('btn').addEventListener('mouseup', function() {
		this.className = '';
	});
})();