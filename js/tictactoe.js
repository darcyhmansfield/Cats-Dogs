
 
$(document).ready(function() {

    const dogBark = new Audio('../img/dog-bark.m4a');

    const catMeow = new Audio('../img/cat-meow.m4a');

    let numClicks = 0;

    $('.box').on('click', function() {

        // A few checks to see if anything should be added to the box

        if (rules.win !== 0) {return};

        const chosenBox = + $(this).attr('id').slice(3);

        if (rules.checkBox(chosenBox)) {return};

        // Dog's turn if numClicks is an even number

        if (numClicks % 2 === 0) {

            dogBark.play();
            $(this).addClass('x');
            const sign = 'x';
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);
            $('.turn').html("Cat's turn!");

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Dogs rule!');
                rules.dogWins += 1;
                $('#dog-wins').html(`Dogs: ${rules.dogWins}`);
                $('.modal, .overlay').addClass('active');
                rules.win = 1;
            }

            // If the single player checkbox is checked, the AI will go next

            if ($('#sp').is(':checked')) {

                // if first go is not in middle, then go middle (box 4), otherwise go to box 0

                if (numClicks === 0) {

                    const first = aiGo.checkFirst();

                    if (first === aiGo.center) {

                        const timeClass = function() {$('#box0').addClass('o')};
                        setTimeout(timeClass, 1000);
                        const sign = 'o';
                        rules.addNum(sign, 0);

                    } else {

                        const timeClass = function() {$('#box4').addClass('o')};
                        setTimeout(timeClass, 1000);
                        const sign = 'o';
                        rules.addNum(sign, 4);

                    }

                // check if there are any rows with two signs

                } else {

                    const winO = aiGo.check2Box('o');
                    const winX = aiGo.check2Box('x');

                    if (winO[0] === 'o') {

                        const winBox = '#box' + winO;
                        const timeClass = function() {$(winBox).addClass('o')};
                        setTimeout(timeClass, 1000);
                        const sign = 'o';
                        rules.addNum(sign, winBox);

                    } else if (winX[0] === 'x') {

                        const winBox = '#box' + winX;
                        const timeClass = function() {$(winBox).addClass('o')};
                        setTimeout(timeClass, 1000);
                        const sign = 'o';
                        rules.addNum(sign, winBox);

                    }


                }

                numClicks += 2;
                return

            }

        // Cat's turn if numClicks is an odd number

        } else {

            catMeow.play();
            $(this).addClass('o');
            const sign = 'o'
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);
            $('.turn').html("Dog's turn!");

            // If winCheck is true, changes modal class to active and unhides modal

            if (rules.winCheck(sign)) {
                $('.modal h2').html('Yeah, cats are okay.');
                rules.catWins += 1;
                $('#cat-wins').html(`Cats: ${rules.catWins}`);
                $('.modal, .overlay').addClass('active');
                rules.win = 1;
            }
        }

        numClicks++;

        // If no wins have occured and the grid is full, then it's a draw

        if (rules.checkFull() !== true) {
            $('.modal h2').html("It's a draw!");
            rules.draws += 1;
            $('#draws').html(`Draws: ${rules.draws}`);
            $('.modal, .overlay').addClass('active');
        }

    });

    // Rules for modal button to start a new game, basically clears and reverts all variables to their original values
        
    $('.new-game').on('click', function() {

        rules.countBox = ['', '', '', '', '', '', '', '', ''];
        rules.win = 0;
        $('.box').each(function() {
            $(this).attr('class', 'box');
        });
        $('.modal').attr('class', 'modal');
        $('.overlay').attr('class', 'overlay');
        $('.turn').html("Dog's turn!");
        numClicks = 0;

    });

})

