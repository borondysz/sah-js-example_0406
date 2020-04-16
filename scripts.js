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
    $('main').append('<p>Added new p tag</p>')
});
let removeFunction = () => {
    $('main p:last-child').remove();
}
$('#remove-button').click(removeFunction);

//function removeFunction(){
//    $('main p').remove;
//}