function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollHeader()};

// Get the header
var header;
var stickyLimit;
var scrollSize;
var firstClick=true;

window.onload=function(){
 header= document.getElementById("navHeader");
 stickyLimit = header.offsetTop;
 scrollSize=header.offsetHeight;
}
 

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollHeader() {
   if (window.pageYOffset > stickyLimit) {
    console.log('a');
     document.getElementById("navHeader").classList.add("sticky");
  } else {
     document.getElementById("navHeader").classList.remove("sticky");
  }
}

