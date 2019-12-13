var firebase = require('firebase/app');
require('firebase/database');

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

	var database = firebase.database(),
		ref = database.ref('questions'),
		qCounter = 1,
		user_answer = [],
		rand_indexes = [],
		right_answers = ['Sabiha Gokcen'],
		questions = ['Who is the first female pilot?'],
		rand,
		i = 0;
	let btnA = document.getElementById('buttonA'),
		btnB = document.getElementById('buttonB'),
		btnC = document.getElementById('buttonC'),
		btnD = document.getElementById('buttonD'),
		aChoice = document.getElementById('aChoice'),
		bChoice = document.getElementById('bChoice'),
		cChoice = document.getElementById('cChoice'),
		dChoice = document.getElementById('dChoice'),
		qNum = document.getElementById('qNum'),
		question = document.getElementById('question');

	//DOM elements
	let buttonFinish = document.getElementById('buttonFinish'),
		buttonNext = document.getElementById('buttonNext');

	buttonFinish.style.visibility = 'hidden';
	buttonFinish.style.display = 'none';

	while (i < 12) {
		rand = Math.ceil(Math.random() * 31);
		console.warn(rand);
		if (rand_indexes.indexOf(rand) == -1) {
			rand_indexes[i] = rand;
			i++;
		}
	}
	console.warn(rand_indexes);
	document;
	buttonFinish.addEventListener('click', function() {
		var count = 0;
		if (user_answer.length == 12) {
			for (var x = 0; x < 12; x++) {
				if (right_answers[x] === user_answer[x]) {
					count++;
				}
			}
			alert('You got ' + count + ' of out of 12 questions right!');
		} else {
			alert('Answer the last question!');
		}
	});
	buttonNext.addEventListener('click', function(e) {
		if (qCounter < 11) {
			e.preventDefault();
			buttonFinish.style.visibility = 'hidden';
			buttonFinish.style.display = 'none';
			ref.on('value', reloadquestion, errData);
		} else if (qCounter == 11) {
			e.preventDefault();
			ref.on('value', reloadquestion, errData);
			buttonNext.style.visibility = 'hidden';
			buttonNext.style.display = 'none';
			buttonFinish.style.visibility = 'visible';
			buttonFinish.style.display = 'inherit';
		} else if (qCounter == 12) {
			buttonFinish.style.visibility = 'visible';
		}
	});

	btnA.onclick = function() {
		user_answer[qCounter - 1] = aChoice.innerHTML;
		btnA.setAttribute('style', 'background-color: #A40E4C');
		btnB.setAttribute('style', 'background-color: #FFFFFF');
		btnC.setAttribute('style', 'background-color: #FFFFFF');
		btnD.setAttribute('style', 'background-color: #FFFFFF');
		console.warn(user_answer);
	};
	btnB.onclick = function() {
		user_answer[qCounter - 1] = bChoice.innerHTML;
		btnA.setAttribute('style', 'background-color: #FFFFFF');
		btnB.setAttribute('style', 'background-color: #A40E4C');
		btnC.setAttribute('style', 'background-color: #FFFFFF');
		btnD.setAttribute('style', 'background-color: #FFFFFF');
		console.warn(user_answer);
	};
	btnC.onclick = function() {
		user_answer[qCounter - 1] = cChoice.innerHTML;
		btnA.setAttribute('style', 'background-color: #FFFFFF');
		btnB.setAttribute('style', 'background-color: #FFFFFF');
		btnC.setAttribute('style', 'background-color: #A40E4C');
		btnD.setAttribute('style', 'background-color: #FFFFFF');
		console.warn(user_answer);
	};
	btnD.onclick = function() {
		user_answer[qCounter - 1] = dChoice.innerHTML;
		btnA.setAttribute('style', 'background-color: #FFFFFF');
		btnB.setAttribute('style', 'background-color: #FFFFFF');
		btnC.setAttribute('style', 'background-color: #FFFFFF');
		btnD.setAttribute('style', 'background-color: #A40E4C');
		console.warn(user_answer);
	};
	function reloadquestion(data) {
		if (typeof user_answer[qCounter - 1] == 'undefined') {
			alert('Choose an answer');
		} else {
			increaseCount();
			qNum.innerHTML = qCounter;
			question.innerHTML = data.val()[
				rand_indexes[qCounter - 1]
			].question;
			right_answers[qCounter - 1] = data.val()[
				rand_indexes[qCounter - 1]
			].answer;
			questions[qCounter - 1] = data.val()[
				rand_indexes[qCounter - 1]
			].question;
			aChoice.innerHTML = data.val()[
				rand_indexes[qCounter - 1]
			].choices[0];
			bChoice.innerHTML = data.val()[
				rand_indexes[qCounter - 1]
			].choices[1];
			cChoice.innerHTML = data.val()[
				rand_indexes[qCounter - 1]
			].choices[2];
			dChoice.innerHTML = data.val()[
				rand_indexes[qCounter - 1]
			].choices[3];
			btnA.setAttribute('style', 'background-color: #FFFFFF');
			btnB.setAttribute('style', 'background-color: #FFFFFF');
			btnC.setAttribute('style', 'background-color: #FFFFFF');
			btnD.setAttribute('style', 'background-color: #FFFFFF');
			console.warn(qCounter);
		}
	}
	console.warn(dChoice);

	function increaseCount() {
		++qCounter;
	}

	function errData(err) {
		console.warn('Error!');
		console.warn(err);
	}
}
