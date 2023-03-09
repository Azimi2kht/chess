const SquareSize = 90;
const IsFirstPlayer = true;

let beingDragged;

createBoard();

function piece(isOnBoard, x, y) {
    this.isOnboard = isOnBoard;
    this.x = x;
    this.y = y;
}

function createBoard() {
    var firstColor;
    var secondColor;
    if (IsFirstPlayer) {
        firstColor = "white";
        secondColor = "black";
    } else {
        firstColor = "black";
        secondColor = "white";
    }

    const board = document.getElementById("board");
    board.setAttribute("style", "display: flex;");
    for (let i = 0; i < 8; i++) {
        let d = document.createElement("div");

        d.style.height = SquareSize * 8 + "px";
        d.style.width = SquareSize + "px";

        let reminder;
        if (i % 2 === 0)
            reminder = 1;
        else
            reminder = 0;

        for (let j = 0; j < 8; j++) {
            let c = document.createElement("div");
            let im = document.createElement("img");
            im.draggable = true;
            im.className = "chess-piece";
            if (j === 1) {
                im.src = `assets/pawn-${firstColor}.svg`;
            } else if (j === 6) {
                im.src = `assets/pawn-${secondColor}.svg`;
            } else if (j === 0) {
                switch (i) {
                    case 0:
                    case 7: {
                        im.src = `assets/rook-${firstColor}.svg`;
                        break;
                    }
                    case 1:
                    case 6: {
                        im.src = `assets/night-${firstColor}.svg`;
                        break;
                    }
                    case 2:
                    case 5: {
                        im.src = `assets/bishop-${firstColor}.svg`;
                        break;
                    }
                    case 4: {
                        im.src = `assets/king-${firstColor}.svg`;
                        break;
                    }
                    case 3: {
                        im.src = `assets/queen-${firstColor}.svg`;
                        break;
                    }
                }
            } else if (j === 7) {
                switch (i) {
                    case 0:
                    case 7: {
                        im.src = `assets/rook-${secondColor}.svg`;
                        break;
                    }
                    case 1:
                    case 6: {
                        im.src = `assets/night-${secondColor}.svg`;
                        break;
                    }
                    case 2:
                    case 5: {
                        im.src = `assets/bishop-${secondColor}.svg`;
                        break;
                    }
                    case 4: {
                        im.src = `assets/king-${secondColor}.svg`;
                        break;
                    }
                    case 3: {
                        im.src = `assets/queen-${secondColor}.svg`;
                        break;
                    }
                }
            }

            c.appendChild(im)
            c.style.height = SquareSize + "px";
            c.style.width = SquareSize + "px";
            c.className = "square";
            c.style.display = "flex";

            if (j % 2 === reminder)
                c.style.backgroundColor = "white";
            else
                c.style.backgroundColor = "#1C82AD";

            d.appendChild(c)
        }
        board.appendChild(d);
    }
}

var squares = document.querySelectorAll('.square');
var pieces = document.querySelectorAll('.chess-piece');

// piece.addEventListener('drag', dragging);
for (let i in pieces)
    pieces[i].addEventListener('dragstart', dragStart);


squares.forEach(square => {
    // square.addEventListener('dragover', dragOver);
    square.addEventListener('dragdrop', dragDrop);

})
function dragStart(e) {
    beingDragged = e.target;
    console.log(beingDragged);
}

function dragDrop(e) {
    e.target.append(beingDragged);
}