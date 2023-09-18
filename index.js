function  calculateRectangleArea() {

    let widthArea = document.getElementById("rectangleLengthArea").value;
    let heightArea = document.getElementById("rectangleWidthArea").value;


    let area = widthArea * heightArea;

    let convertArea = Number(area.toFixed(4));

    document.getElementById("area").innerHTML = area;

   
}

function calculateRectangleAround() { 

    let widthAround = parseInt(document.getElementById("rectangleLengthAround").value);
    let heightAround = parseInt(document.getElementById("rectangleWidthAround").value);

    let around = 2 * (widthAround + heightAround);

    let convertAround = Number(around.toFixed(4));


    document.getElementById("around").innerHTML = convertAround;

}

function  calculateRectangleLength() {
    
    let aroundLength = parseInt(document.getElementById("rectangleAroundLength").value);
    let widthLength = parseInt(document.getElementById("rectangleWidthLength").value);

    let length = aroundLength / widthLength;

    let convertLength = Number(length.toFixed(4));

    document.getElementById("length").innerHTML = convertLength;
}

function calculateRectangleWidth() {
    
    let aroundWidth = parseInt(document.getElementById("rectangleAroundWidth").value);
    let lengthWidth = parseInt(document.getElementById("rectangleLengthWidth").value);

    let width = aroundWidth / lengthWidth;

    let convertWidth = Number(width.toFixed(4));


    document.getElementById("width").innerHTML = convertWidth;

}

function calculateRectangleDiagonal() {
    
    let widthDiagonal = parseInt(document.getElementById("rectangleWidthDiagonal").value);
    let lengthDiagonal = parseInt(document.getElementById("rectangleLengthDiagonal").value);

    let diagonal = Math.sqrt(widthDiagonal * widthDiagonal + lengthDiagonal * lengthDiagonal);

    let convertDiagonal = Number(diagonal.toFixed(4));

    document.getElementById("diagonal").innerHTML = convertDiagonal;

}
