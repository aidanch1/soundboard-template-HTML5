const buttonsPerRow = 3; // A factor of the number of sounds you have is recommended so the buttons line up. (i.e: 9 sounds, use 3 per row, 15 sounds, use 3 or 5 per row)

$(document).ready(function(){
    $("audio").each(function(index, audio){
        //add each audio clip to the webpage
        if (index % buttonsPerRow == 0){
            $(".container").append($('<div class="row m-4"></div>'));
        }
        var button = $('<button class="m-auto">' + audio.title + '</button>');
        button.click(function() {
            audio.play();
            button.css("background-position", "left");
        });
        audio.onloadedmetadata = function() {
            button.css("transition", audio.duration + "s linear");
        };
        audio.onended = function() {
            button.css("transition", "none");
            button.css("background-position", "right");
            button.outerHeight();
            button.css("transition", audio.duration + "s linear");
        }
        $(".container").children().eq(Math.floor(index / buttonsPerRow)).append($('<div class="col"></div>').append(button));
    })
})
