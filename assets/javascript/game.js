addEventListener

// Create the array of characters
var characters = ['Boba Fett', 'Darth Vader', 'Han Solo', 'Luke Skywalker'];

// Create for loop to iterate through characters
for (var i = 0; i < characters.length; i++) {

    // Creates image tag for each on the page
    var charimg = $("<img>");

    // Each imgage will be given the classes "character-image" & "Name-Tag".
    charimg.addClass("character-image");

    // This will place the source as the name of the character
    var source = 'assets/images/' + characters[i] + '.jpg';
    charimg.attr("src", source);

    // Adds class of Position and sets it to the neutral name as a place holder until assigned later
    charimg.attr('Position', 'Neutral');

    // look into using javascript canvas to write numbers to page

    // Adds the images to the screen
    $("#character").append(charimg);
}

// when clicked it will assign the position to be friendly
// all others will be assigned to the position of enemy
// friendly will be moved to the "your character" section
// all others will be moved to the enemy available section
var chosen = 0;
$('.character-image').one('click', function () {
    $(this).attr('Position', 'Friendly');
    $('#ChosenChar').append(this);
    chosen++;
    
    $('img').each(function () {
        if ($(this).attr('Position') == 'Neutral') {
            $("#Enemies").append(this);
            $(this).attr('Position', 'Enemy');
        };
    });

    // turns of ability to click
    // $('.character-image').off('click');
});
$('.character-image').one('click', function () {
    if ($('.character-image').attr('Position') == 'Enemy') {
        $("#Fight").append(this);
    }
});
