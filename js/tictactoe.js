

$(document).ready(function() {

    const dogBark = new Audio('../img/dog-bark.m4a');

    const catMeow = new Audio('../img/cat-meow.m4a');

    let numClicks = 0;

    $('.box').on('click', function() {

        if (rules.win !== 0) {return};

        const chosenBox = + $(this).attr('id').slice(3);

        if (rules.checkBox(chosenBox)) {return};

        if (numClicks % 2 === 0) {

            dogBark.play();
            $(this).addClass('x');
            const sign = 'x';
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Dogs rule!');
                rules.dogWins += 1;
                $('#dog-wins').html(`Dogs: ${rules.dogWins}`);
                $('.modal, .overlay').addClass('active');
                rules.win = 1;
            }

        } else {

            catMeow.play();
            $(this).addClass('o');
            const sign = 'o'
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Yeah, cats are okay.');
                rules.catWins += 1;
                $('#cat-wins').html(`Cats: ${rules.catWins}`);
                $('.modal, .overlay').addClass('active');
                rules.win = 1;
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
        numClicks = 0;

    });

})

