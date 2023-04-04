

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

    let win = 0;

    $('.box').on('click', function() {

        if (rules.win === 1) {return}

        const chosenBox = + $(this).attr('id').slice(3);

        if (rules.checkBox(chosenBox)) {return};

        if (numClicks % 2 === 0) {

            $(this).addClass('x');
            const sign = 'x';
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                console.log('Dog wins!');
                win = 1;
            }

        } else {

            $(this).addClass('o');
            const sign = 'o'
            rules.addNum(sign, chosenBox);
            rules.winCheck(sign);

            if (rules.winCheck(sign)) {
                console.log('Cat wins!');
                win = 1;
            }
        }

        numClicks++;

        if (rules.checkFull() !== true) {
            console.log("It's a draw!");
        }

    });

    const popup = function() {

    }

})

// add classes (x or o using images)OR
// event.target
// have the grid be an array, event.target will add an x or o