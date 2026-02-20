let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {
    //targeting the item shown on the carousel
    const items = document.querySelectorAll(".carousel-item");

    //if the user is going forward through the images and if
    //current position is bigger than the length of items, false will be returned
    //and then the current position is increased and iterates through
    //else, if the position is 0, false is returned and the current position
    //is decreased. 

    if (direction == "forward") {
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;
        }
        currentPosition++;
    } else {
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--;
    }

    //change the postion and shift it one width of the picture
    const offset = (slideWidth + gap) * currentPosition;

    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
