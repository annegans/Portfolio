function toggleAbout(){
  console.log("works")
  $(".togglebox").slideToggle("slow")
}

function toggleContact(){
  // $(".togglebox2").slideToggle("slow")
  // $(".togglebox2").show( "slide", {direction: "up" }, 2000 );
  $(".togglebox2").slideToggle("slow")
}


$(function(){
$(".babout").on("click", toggleAbout);
$(".bcontact").on("click", toggleContact);
})





