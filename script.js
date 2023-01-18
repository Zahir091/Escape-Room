/*The yes-button and no-button transitions to the first door set*/

$(".yes-button").click( function() {
    var wall = "https://bathescape.co.uk/wp-content/uploads/2016/06/live-escape-rooms-bg.jpg";
    $("body").css("background-image", "url(" + wall + ")");
    $(".character, .yes-button, .no-button").hide();
    $(".title").text("Great! Pick a door");
    $("#door1, #door2").show();
});

$(".no-button").click( function() {
    var wall = "https://bathescape.co.uk/wp-content/uploads/2016/06/live-escape-rooms-bg.jpg";
    $("body").css("background-image", "url(" + wall + ")");
    $(".character, .yes-button, .no-button").hide();
    $(".title").text("Too bad, you're doing it anyway! Pick a door.");
    $("#door1, #door2").show();
});

/*------------------------------------------------------------------------*/

/*Door 1: transitions to a hallway with 3 clickable objects*/

$("#door1").click( function() {
    var background2 = "https://i.pinimg.com/originals/86/df/42/86df4203a62f96978fe566b668386906.png";
    $("body").css("background-image", "url(" + background2 + ")");
    $(".door").hide();
    $("#red, #paper, #gold").show();
     $(".title").text("Hover over on an object for a clue");
});

/*Door 2: You lost*/

$("#door2").click( function() {
    var trap = "https://mindtrapescaperooms.com/wp-content/uploads/2021/12/Massacre-Mind-Trap-_A9_0463.jpg";
    $("body").css("background-image", "url(" + trap + ")");
    $(".door").hide();
     $("#restart").show();
     $(".title").text("You fell into a trap! Game Over!!!");
});

/*------------------------------------------------------------------------*/

/*Double click the paper, to show a gemstone, and win*/

$("#paper").mouseenter( function() {
    $(".title").text("Double click the note, to read.");
});

$("#paper").dblclick( function() {
    $(".title2").text("Click on that strange stone over there.");
    $(".title2").show("slow");
    $("#red, #paper, #gold, .title").hide();
    $("#stone").show();
});

$("#stone").click( function() {
     var candy = "https://i.pinimg.com/originals/52/50/53/5250532ead8fb6b55a218c07fa298d13.png";
    $("body").css("background-image", "url(" + candy + ")");
    $(".title2").text("Nice! You found my candy stash.");
    $(".title2, .character").show("slow");
    $("#stone").hide();
});

/*------------------------------------------------------------------------*/

/*Red Key:  display second set of doors, and spider*/

$("#red").mouseenter( function() {
    $(".title").text("Double click the red key, to open a door");
});


$("#red").dblclick( function() {
    var wall = "https://bathescape.co.uk/wp-content/uploads/2016/06/live-escape-rooms-bg.jpg";
    $("body").css("background-image", "url(" + wall + ")");
    /*Delay method delays the code, so the user only has 4.8 seconds to choose a door before loosing*/
    $(".title2, #door3, #door4, h3, #spider").show().delay(5000).fadeOut();
    $(".title2").text("You open a door, only to encouter two more doors and a huge spider! Quick pick a door!").delay(5000).fadeOut();
    $("#red, #paper, #gold, .title").hide();
    $(".title").text("You lost!");
    $(".title").delay(5000).fadeIn();
    $("#restart").delay(5000).fadeIn();
   
});

/*------------------------------------------------------------------------*/

/*Door 3: user will loose*/

$("#door3").click( function() {
    var trap = "https://mindtrapescaperooms.com/wp-content/uploads/2021/12/Massacre-Mind-Trap-_A9_0463.jpg";
    $("body").css("background-image", "url(" + trap + ")");
    $("#door3, #door4, #spider").hide();
    $(".title").clearQueue();
    $(".title2").clearQueue().text("You fell into a trap! Game Over!!!");
    $("#restart").show();
});

/*------------------------------------------------------------------------*/

/*Door 4: user will be prompt to try again and find an alternate way out*/

$("#door4").click( function() {
    $("#door3, #door4, #spider").hide();
    $(".title").clearQueue();
    $(".character, #restart").show();
    $(".title2").clearQueue().text("Congrats you made it out! But I left my candy inside. Try again?");
});

/*------------------------------------------------------------------------*/

/*Gold Key: user looses*/

$("#gold").mouseenter( function() {
    $(".title").text("Double click the gold key, to open a door");
});

$("#gold").dblclick( function() {
    $(".title2").text("You fell into a trap. You lost!");
    $(".title2, #restart").show("slow");
    $("#red, #paper, #gold, .title").hide();
        var trap = "https://mindtrapescaperooms.com/wp-content/uploads/2021/12/Massacre-Mind-Trap-_A9_0463.jpg";
    $("body").css("background-image", "url(" + trap + ")");
});

/*------------------------------------------------------------------------*/


/*restart button shows the first set of doors again so user starts over*/

$("#restart").click( function() {
    var wall = "https://bathescape.co.uk/wp-content/uploads/2016/06/live-escape-rooms-bg.jpg";
    $("body").css("background-image", "url(" + wall + ")");
    $("body").css("background-color", "orange");
    $("#door1, #door2, h2, .title").show();
    $(".title").text("Great! Pick a door");
    $("#restart").clearQueue();
    $("h2, #restart, .title2, .character").hide();
});












