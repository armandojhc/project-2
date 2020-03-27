let progressTravel = 1;
let progressWork = 1;
let progressSocial = 1;
let progressJokes = 1;
let progressFood = 1;

$(document).ready(function () {

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  //Set progress from database
  $.get("/api/user_data").then(function (data) {
    progressTravel = data.progressTravel;
    progressFood = data.progressFood;
    progressWork = data.progressWork;
    progressSocial = data.progressSocial;
    progressJokes = data.progressJokes;
    //  front end api call to the work category
    $(".member-name").text(` ${data.email}`);
    $(".home-progress-travel").text(`Progress: ${data.progressTravel}`);
    $(".home-progress-food").text(`Progress: ${data.progressFood}`);
    $(".home-progress-work").text(`Progress: ${data.progressWork}`);
    $(".home-progress-social").text(`Progress: ${data.progressSocial}`);
    $(".home-progress-jokes").text(`Progress: ${data.progressJokes}`);
  });

  $.get("/api/phrases").then(function (data) {
    console.log(data);
  })
});
