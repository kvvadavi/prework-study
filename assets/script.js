var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var topic = "HTML";


console.log(topics[0])
if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

// Function and calling the function
function helloWorld() {
  console.log("Hello, world, I am a function!")
 }

 helloWorld();

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

// Control Flow to demonstrate linear flow of coding.
function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
