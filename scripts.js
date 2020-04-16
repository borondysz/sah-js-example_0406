let name = 'Adam';

console.log(`Hello my dear ${name}`);

//jQuery part

$('css selector').action
$('p').html('<strong>jQuery</strong> part has started!');
$('h1').css('background', 'red');
$('h2').toggleClass('green');
$('p').toggleClass('green');
$('main').append('<p>Added element</p>');
$('main').append('<p>Adde second element</p>');

$('#first').remove();
$('#add-button').click(() => {
    if($('main p').length < 5){
    $('main').append(`<p>Username: ${$('#name').val()}</p>`)

    } else{
        $('main').append(`<p>this is a new paragraph</p>`) 
    }
});
let removeFunction = () => {
    $('main p:last-child').remove();
}
$('#remove-button').click(removeFunction);

//function removeFunction(){
//    $('main p').remove;
//}

//Last part Conditions and Loops

let age = 35;

if (age > 18){
    console.log('This person can drink.');
} else {
    console.log('This is a kid, no alcohol');
}

//if (condition){
    //statements
//}else{

//}


//$('main').append('<div class="box"></div>');
//('main div:last-child').css('background' 'orange' );
//$('main').append('<div class="box"></div>');
//$('main div:last-child').css('background' 'yellow' );
//$('main').append('<div class="box"></div>');
//$('main div:last-child').css('background' 'purple' );
//$('main').append('<div class="box"></div>');
//$('main div:last-child').css('background' 'green' );
//$('main').append('<div class="box"></div>');
//$('main div:last-child').css('background' 'blue' );

let colors =['orange', 'yellow', 'purple', 'green', 'blue']
colors.push('magenta');
colors.forEach((color) => {
$('main').append('<div class="box"></div>');
$('main div:last-child').css('background', color); 
})

for(let i = 0; i < 100; i++) {
    console.log('Current number: ' + i);
}