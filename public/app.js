function toggleAbout(){
  $(".togglebox").slideToggle("slow") 
}

function closeAbout(){
  $(".togglebox").slideUp("slow")
}

function toggleContact(){
  $(".togglebox2").slideToggle("slow")  
}

function closeContact(){
  $(".togglebox2").slideUp("slow")
}


function openProject1(){

  $(".project2b").addClass("hide-project")
  $(".project3b").addClass("hide-project")
  $(".project4b").addClass("hide-project")
  $(".project1text").attr("id","show-text1");
  $(".project1-toggleclass").slideDown("slow")
  $(".go-back").attr("id","show-botton")
}

function openProject2(){
  $(".project1b").addClass("hide-project")
  $(".project3b").addClass("hide-project")
  $(".project4b").addClass("hide-project")
  $(".project2text").attr("id","show-text2")
  $(".project2-toggleclass").slideDown("slow")
  $(".go-back").attr("id","show-botton")

}

function openProject3(){
  $(".project1b").addClass("hide-project")
  $(".project2b").addClass("hide-project")
  $(".project4b").addClass("hide-project")
  $(".project3text").attr("id","show-text3")
  $(".project3-toggleclass").slideDown("slow")
  $(".go-back").attr("id","show-botton")
  $(".display").addClass("hide-project")
}

function openProject4(){
  $(".project1b").addClass("hide-project")
  $(".project2b").addClass("hide-project")
  $(".project3b").addClass("hide-project")
  $(".project4text").attr("id","show-text4")
  $(".project4-toggleclass").slideDown("slow")
  $(".go-back").attr("id","show-botton")
  $(".display").addClass("hide-project")
}

function projectPage(){
  console.log("works")
 $(".project1b").removeClass("hide-project")
 $(".project2b").removeClass("hide-project")
 $(".project3b").removeClass("hide-project")
 $(".project4b").removeClass("hide-project")
 $(".project1text").removeAttr("id","show-text1");
 $(".project2text").removeAttr("id","show-text2");
 $(".project3text").removeAttr("id","show-text3");
 $(".project4text").removeAttr("id","show-text4");
 $(".project1-toggleclass").slideUp("fast")
 $(".project2-toggleclass").slideUp("fast")
 $(".project3-toggleclass").slideUp("fast")
 $(".project4-toggleclass").slideUp("fast")
 $(".go-back").removeAttr("id","show-botton")

}





$(function(){
  $(".babout").on("click", toggleAbout);
  $("body").on("click",".closeAbout", closeAbout)
  $(".bcontact").on("click", toggleContact);
  $("body").on("click",".closeContact", closeContact)
  $(".project1b").on("click", openProject1);
  $(".project2b").on("click", openProject2);
  $(".project3b").on("click", openProject3);
  $(".project4b").on("click", openProject4);
  $("body").on("click", ".go-back", projectPage)
  $("body").on("click", ".back", projectPage)
  
})




