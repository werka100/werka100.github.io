var firstName;
var lastName;

function askQuestions () {

		var firstName = prompt('What is your first name?');
		var lastName = prompt('What is your last name?');

		var fullName = firstName + ' ' + lastName;
		console.log('User is called ' + fullName);

		var age = prompt('How old are you fellah?');
		age = parseInt(age);


		if (age>= 18) {
			console.log('User is an adult');
		} else if (age>=13) {
			console.log('User is a teenager, yo!');
		} else {
			console.log('User is a kiddo');
		}


		/*
		If the user's first name is 'General' and the last name is NOT 'Assembly', then greet the general!
		*/

		if (firstName.toLowerCase()=='General' && lastName.toLowerCase()!='Assembly') {
			console.log('Hello you, Mr General NOT Assembly!')
		}

		var faveColor = prompt('What is your favourite colour?');

		faveColo=faveColor.toLowerCase();

		if (faveColor == 'red' ||
		    faveColor =='green' || 
		    faveColor == 'red' ||
		    faveColor == 'yellow') {
			$('h1').css('color', faveColor);
		}

}


// When the page loads

$(function() {

	//When the user clicks the image, ask the questions
	$('img').on('click', askQuestions);


	//When the user clicks a heading
	$('h3').on('click', function () {

		//Toggle the next element\
		$(this).next().slideToggle(300);
	});

});