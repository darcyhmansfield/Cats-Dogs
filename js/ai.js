

const aiGo = {

    // Check which box wasa chosen first

    checkFirst: function() {

        for (i=0; i<rules.countBox.length; i++) {

            if (rules.countBox[i] !== '') {return i};

        }

    },

    // Define edge boxes vs middle

    edgeMiddle: [1, 3, 5, 7],

    edgeCorner: [0, 2, 6, 8],

    center: 0,

    // Check if there are any winArrays with only 1 empty space

    self2Box: function(sign) {

        for (x=0; x<rules.winArray.length; x++) {

            let countEmpty = 0;
            let countX = 0;
            let countO = 0;
            let empty = '';

            for (i=0; i<3; i++) {
                
                if (rules.countBox[rules.winArray[x][i]] === 'x') {

                    countX += 1;
                    countEmpty += 1;

                } else if (rules.countBox[rules.winArray[x][i]] === 'o') {

                    countO += 1;
                    countEmpty += 1;

                } else {

                    const selfEmpty = rules.winArray[x][i];

                }
            }

            if (count === 2) {
                
                return selfEmpty;

            };

        }

    }



}