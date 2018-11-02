function getRequest() {

//apiKey location
var apiKey = "d92e54e488034f8c917c32b1c09096b6"

//have search be the value of what the user searched
var search = $("#search").val();

//have filter be user input, preferably between one and ten results
var filter = $("#filter").val();

//have starting date be the a date value
var earlyDate = $("#earlyDate").val() + "0101";

//ending date is similar but a later date
var endDate = $("#endDate").val() + "1231";

$("#searchButton").on("click", function() {
//query url is the combination of these fields plus the api search and API key
var queryURL = "https://api.nytimes.com/svc/search/v2/?q=" + search + "&fq="
    + filter + "&begin_date=" + earlyDate + "&end_date=" + endDate +
    "&api_key=" + apiKey;

    //now time to call an ajax function
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
            
        
});
})

}