 

const aiGo = {

    // Check which box was chosen first

    checkFirst: function() {

        for (i=0; i<rules.countBox.length; i++) {

            if (rules.countBox[i] !== '') {return i};

        }

    },

    // Define edge boxes vs middle

    edgeMiddle: [1, 3, 5, 7],

    edgeCorner: [0, 2, 6, 8],

    center: 4,

    // Check if there are any winArrays with only 1 empty space

    check2Box: function(sign) {

        for (x=0; x<rules.winArray.length; x++) {

            let countEmpty = 0;
            let countX = 0;
            let countO = 0;
            let empty = '';

            for (i=0; i<3; i++) {

                const letter = rules.countBox[rules.winArray[x][i]];
                
                if ( letter === 'x' ) {countX++}
                else if (letter === 'o') {countO++}
                else {
                    countEmpty++;
                    empty = i;
                };

            }

            if (countEmpty === 1) {

                const boxNum = rules.winArray[x][empty];

                if (countO === 2 && sign === 'o') {
                    
                    return ['o', boxNum];

                } else if (countX === 2 && sign === 'x') {

                    return ['x', boxNum];

                } else {

                    return ['', boxNum];

                };

            };

        }

    }



}