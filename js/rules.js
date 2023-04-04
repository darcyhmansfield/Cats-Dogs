

// define grid

//make each grid box a button
// each button will show x or o based on move
// store each pick into an object
// check each turn whether winning rules have been met


const addX = function() {
    if (box !== "") {
        return null
    } else {
        add 
    }
}



const rules = {

    countBox: ['', '', '', '', '', '', '', '', ''],

    winArray: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]],

    checkBox: function(number) {
        return this.countBox[number] !== '';
    },

    addNum: function(sign, number) {
        this.countBox[number] = sign;
    },

    winCheck: function(sign) {

        for (x=0; x<this.winArray.length; x++) {

            let count = 0;

            for (i=0; i<3; i++) {
                
                if (this.countBox[this.winArray[x][i]] === sign) {

                    console.log(this.countBox[this.winArray[x][i]]);
                    count += 1;

                }
            }

            console.log(count);

            if (count === 3) {
                console.log('WIN')
                return true
            };

        }
    }
}
