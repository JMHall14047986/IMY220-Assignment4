$(() => {


$('div.details button').addClass('edit');
$('<input></input>').insertAfter('span').hide();
$('<button>Update</button>',).insertAfter('button').addClass('btn btn-dark pull-right update').hide();

$('div.details').eq(0).addClass('name');
$('div.details').eq(1).addClass('surname');
$('div.details').eq(2).addClass('email');
$('div.details').eq(3).addClass('dob');

//name
$('div.name button.edit').on("click", function(){

	let x= $('div.name span').text();
	$('div.name').children().toggle();
	$('div.name input').attr('value',x).attr('type', 'text');		
}); 

$('div.name button.update').on("click", function(){

	let y= $('div.name input').val();
	$('div.name').children().toggle();
	$('div.name span').text(y);
});

//surname
$('div.surname button.edit').on("click", function(){

	let x= $('div.surname span').text();
	$('div.surname').children().toggle();
	$('div.surname input').attr('value',x).attr('type', 'text');	
}); 

$('div.surname button.update').on("click", function(){

	let y= $('div.surname input').val();
	$('div.surname').children().toggle();
	$('div.surname span').text(y);
});

//email
$('div.email button.edit').on("click", function(){

	let x= $('div.email span').text();
	$('div.email').children().toggle();
	$('div.email input').attr('value',x).attr('type', 'email');		
}); 

$('div.email button.update').on("click", function(){

	let y= $('div.email input').val();
	$('div.email').children().toggle();
	$('div.email span').text(y);
});

//dob
$('div.dob button.edit').on("click", function(){

	let x= $('div.dob span').text();
	$('div.dob').children().toggle();
	$('div.dob input').attr('value',x).attr('type', 'date');		
}); 

$('div.dob button.update').on("click", function(){

	let y= $('div.dob input').val();
	$('div.dob').children().toggle();
	$('div.dob span').text(y);
});




























});