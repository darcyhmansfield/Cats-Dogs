

// define grid
// make each grid box a button
// when clicked, box will add character
// if box already taken, nothing happens
// switch turns
// store each pick into an object
// check each turn whether winning rules have been met

$(document).ready(function() {
    console.log('ready!');

    let numClicks = 0;

    $('.box').on('click', function() {

        // if (rules.win === 1) {return}

        const chosenBox = + $(this).attr('id').slice(3);

        if (rules.checkBox(chosenBox)) {return};

        if (numClicks % 2 === 0) {

            $(this).addClass('x');
            const sign = 'x';
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Dogs rule!');
                rules.dogWins += 1;
                $('#dog-wins').html(`Dogs: ${rules.dogWins}`);
                $('.modal, .overlay').addClass('active');
            }

        } else {

            $(this).addClass('o');
            const sign = 'o'
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Yeah, cats are okay.');
                rules.catWins += 1;
                $('#cat-wins').html(`Cats: ${rules.catWins}`);
                $('.modal, .overlay').addClass('active');
            }
        }

        numClicks++;

        if (rules.checkFull() !== true) {
            $('.modal h2').html("It's a draw!");
            rules.draws += 1;
            $('#draws').html(`Draws: ${rules.draws}`);
            $('.modal, .overlay').addClass('active');
        }

    });
        
    $('.new-game').on('click', function() {

        rules.countBox = ['', '', '', '', '', '', '', '', ''];
        rules.win = 0;
        $('.box').each(function() {
            $(this).attr('class', 'box');
        });
        $('.modal').attr('class', 'modal');
        $('.overlay').attr('class', 'overlay');

    });

})

// add classes (x or o using images)OR
// event.target
// have the grid be an array, event.target will add an x or o