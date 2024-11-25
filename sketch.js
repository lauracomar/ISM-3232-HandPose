let handPose;
function preload() { //preload: ensures that the model is loaded before the setup and draw
    handPose = ml5.handPose();
};
let video
function setup() {
    createCanvas(640, 480);
    // fetch video and hide it
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    // Start detecting hands from the webcam video
    handPose.detectStart(video, gotHands);
};
let hands = [];

// Callback function for when handPose outputs data
function gotHands(results) {
    // Save the output to the hands variable
    hands = results;
}
function draw() {
    image(video, 0, 0, width, height);
    // Draw all the tracked hand points
    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];
        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];
            fill(0, 255, 0);
            noStroke();
            circle(keypoint.x, keypoint.y, 10);
        }
    }
}
// Callback function for when handPose outputs data
function gotHands(results) {
    // save the output to the hands variable
    hands = results;
}