 


const rules = {

    // Beginning array empty

    countBox: ['', '', '', '', '', '', '', '', ''],

    // All winning positions in a 3x3

    winArray: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],

    // Check whether the box clicked already has a sign in it

    checkBox: function(number) {
        return this.countBox[number] !== '';
    },

    // Insert the chosen sign into the countBox array

    addNum: function(sign, number) {
        this.countBox[number] = sign;
    },

    // Check whether every position is taken (i.e. game over)

    checkFull: function() {
        for (i=0; i<this.countBox.length; i++) {
            if (this.countBox[i] === '') {
                return true
            }
        }
    },

    // Check whether any of the winArray's have the same sign in all three positions
    // Iterate through each winArray and compare each position in the countBox to the sign

    winCheck: function(sign) {

        for (x=0; x<this.winArray.length; x++) {

            let count = 0;

            for (i=0; i<3; i++) {
                
                if (this.countBox[this.winArray[x][i]] === sign) {

                    count += 1;

                }
            }

            if (count === 3) {
                this.win = 1;
                return true
            };

        }
    },

    // Counters for each win

    win: 0,

    catWins: 0,

    dogWins: 0,

    draws: 0,
}
