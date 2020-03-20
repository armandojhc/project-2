$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(`Logged in as ${data.email}`);
  });

  $.get("/api/phrases").then(function(data) {
    console.log(data);
  })
});
