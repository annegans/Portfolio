function toggleAbout(){
  
  $(".togglebox").slideToggle("slow")
  $(".hide-split").addClass("hide-show")
}

function toggleContact(){
  // $(".togglebox2").slideToggle("slow")
  // $(".togglebox2").show( "slide", {direction: "up" }, 2000 );
  $(".togglebox2").slideToggle("slow")
}


function openProject1(){

  $(".project2b").addClass("hide-project")
  $(".project3b").addClass("hide-project")
  $(".project4b").addClass("hide-project")
  // $(".project1text").addClass("show")
  $(".project1text").attr("id","show-text1");
  $(".project1-toggleclass").slideToggle("slow")


}

$(function(){
  $(".babout").on("click", toggleAbout);
  $(".bcontact").on("click", toggleContact);
  $(".project1b").on("click", openProject1);

})




