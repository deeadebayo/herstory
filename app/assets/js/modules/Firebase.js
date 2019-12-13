// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/database');
//var ReactDOM = require('react-dom');

const firebaseConfig = {
	apiKey: 'AIzaSyD92Ce4HzvYMeqJFvFSdEe3yHNPMYXrs9k',
	authDomain: 'herstory-bd9f1.firebaseapp.com',
	databaseURL: 'https://herstory-bd9f1.firebaseio.com',
	projectId: 'herstory-bd9f1',
	storageBucket: 'herstory-bd9f1.appspot.com',
	messagingSenderId: '916711912288',
	appId: '1:916711912288:web:bcc7df1fc28ae093ece405',
	measurementId: 'G-414R0D8YD9'
};

export function FirebaseInit() {
	firebase.initializeApp(firebaseConfig);

	var database = firebase.database();
	var ref = database.ref('questions');
	var qCounter = 1;
	ref.on('value', gotData, errData);
	var user_answer = [];

	
	

	function gotData(data) {
		// console.warn(data.val());
		// console.warn(typeof data.val());
		// console.warn(data.val()[2].choices[0]);
		document.getElementById('num').innerHTML = '#'+qCounter;
		document.getElementById('question').innerHTML = data.val()[qCounter].question;
		document.getElementById('a').innerHTML = data.val()[qCounter].choices[0];
		document.getElementById('b').innerHTML = data.val()[qCounter].choices[1];
		document.getElementById('c').innerHTML = data.val()[qCounter].choices[2];
		document.getElementById('d').innerHTML = data.val()[qCounter].choices[3];

		//document.getElementById('next').onclick = function() {increaseCount()};

	}

	document.getElementById('next').addEventListener('click', function(e) {
		if (qCounter < 11) {
			e.preventDefault();
			ref.on('value', reloadquestion, errData);
		} else if (qCounter == 11) {
			e.preventDefault();
			ref.on('value', reloadquestion, errData);
			document.getElementById('next').innerHTML = 'FINISH';
		} else if (qCounter == 12) {
			document.getElementById('finish').setAttribute('href', 'results.html');
		}

	})

	document.getElementById('a').onclick = function () {
		user_answer[qCounter - 1] = document.getElementById('a').innerHTML;
		console.warn(user_answer);
	}
	document.getElementById('b').onclick = function () {
		user_answer[qCounter - 1] = document.getElementById('b').innerHTML;
		console.warn(user_answer);
	}
	document.getElementById('c').onclick = function () {
		user_answer[qCounter - 1] = document.getElementById('c').innerHTML;
		console.warn(user_answer);
	}
	document.getElementById('d').onclick = function () {
		user_answer[qCounter - 1] = document.getElementById('d').innerHTML;
		console.warn(user_answer);
	}
	function reloadquestion (data) {
		if (typeof(user_answer[qCounter -1]) == 'undefined') {
			alert('Choose an answer')
		} else {
			increaseCount();
			document.getElementById('num').innerHTML = qCounter;
			document.getElementById('question').innerHTML = data.val()[qCounter].question;
			document.getElementById('a').innerHTML = data.val()[qCounter].choices[0];
			document.getElementById('b').innerHTML = data.val()[qCounter].choices[1];
			document.getElementById('c').innerHTML = data.val()[qCounter].choices[2];
			document.getElementById('d').innerHTML = data.val()[qCounter].choices[3];
			console.warn(qCounter);
			
		}
	}
	console.warn(document.getElementById('d'));

	function increaseCount () {
		++qCounter;
	}

	function errData(err) {
		console.warn('Error!');
		console.warn(err);
	}

	
}
