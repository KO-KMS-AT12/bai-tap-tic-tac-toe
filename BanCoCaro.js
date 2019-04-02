const cards = document.querySelectorAll(".card");
const winner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
var player1 = [];
var player2 = [];
var count = 0;

main();

function main() {
    cards.forEach(function (card) {
        return card.addEventListener("click", draw);
    });
}

function check(array) {
    let finalResult = false;
    for (let item of winner) {
        // console.log('item: ' + item);
        var res = item.every(function (value) {
            // console.log('value: ' + value);
            return array.indexOf(value) !== -1;
        });
        if (res) {
            finalResult = true;
            break;
        }
    }
    // console.log("res: " + res);
    // console.log('finalResult: ' + finalResult);

    return finalResult;
}

function winnerpleyr(namePlayer) {
    let modal = document.createElement("div");
    let player = document.createTextNode(namePlayer);
    let playAgain = document.createElement("button");
    modal.classList.add("winner");

    //appendChild them thuoc tinh
    modal.appendChild(player);
    modal.appendChild(playAgain);
    playAgain.appendChild(document.createTextNode("Play again"));
    document.body.appendChild(modal);

    //setAttribute xet su kien cho button
    playAgain.setAttribute("onclick", "rep()");
}

function rep() {
    var win = document.querySelector(".winner");
    cards.forEach(function (card) {
        return card.classList = "card";
    });
    player1 = [];
    player2 = [];
    count = 0;
    win.remove();
}

function draw() {
    if (this.classList == "card") {
        count++;
        if (count % 2 !== 0) {
            this.classList.add("x");
            var arrPlayer1 = player1.push(Number(this.dataset.index));
            // console.log(arrPlayer1);
            // console.log(Number(this.dataset.index))
            if (check(player1)) {
                winnerpleyr("Player One Win");
            }
        } else {
            this.classList.add("o");
            var arrPlayer2 = player2.push(Number(this.dataset.index));
            // console.log(arrPlayer2);

            // console.log(Number(this.dataset.index))
            if (check(player2)) {
                winnerpleyr("Player Two Win");
            }
        }
        // dang bug khi count = 9 chi xet mac dinh hoa.
        if (count === 9) {
            winnerpleyr("Draw");
        }
        console.log("count: " + count);
    }
}

