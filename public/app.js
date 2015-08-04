function toggleAbout(){
  $(".togglebox1").slideDown("slow") 

}

function closeAbout(){
  $(".togglebox1").slideUp("slow")
}

function toggleContact(){
  $(".togglebox3").slideDown("slow")  
}

function closeContact(){
  $(".togglebox3").slideUp("slow")
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

function showFirst(){
  $('.img-one').removeClass('img-hide')
  $('.img-two').removeClass('img-show')
  $('.img-three').removeClass('img-hide')
  $('.img-four').removeClass('img-show')

  $('.first-img').addClass('black')
  $('.second-img').removeClass('black')
  $('.third-img').removeClass('black')
  $('.four-img').removeClass('black')
}

function showSecond(){
  $('.img-one').addClass('img-hide')
  $('.img-two').addClass('img-show')
  $('.img-four').removeClass('img-show')
  $('.img-three').removeClass('img-show')

  $('.second-img').addClass('black')
  $('.first-img').removeClass('black')
  $('.third-img').removeClass('black')
  $('.four-img').removeClass('black')
}

function showThird(){
  $('.img-three').addClass('img-show')
  $('.img-one').addClass('img-hide')
  $('.img-two').removeClass('img-show')
  $('.img-four').removeClass('img-show')

  $('.third-img').addClass('black')
  $('.first-img').removeClass('black')
  $('.second-img').removeClass('black')
  $('.four-img').removeClass('black')
  
}
function showFour(){
  $('.img-three').removeClass('img-show')
  $('.img-one').addClass('img-hide')
  $('.img-two').removeClass('img-show')
  $('.img-four').addClass('img-show')

  $('.four-img').addClass('black')
  $('.first-img').removeClass('black')
  $('.second-img').removeClass('black')
  $('.third-img').removeClass('black')
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
  $("body").on("click", ".first-img", showFirst)
  $("body").on("click", ".second-img", showSecond)
  $("body").on("click", ".third-img", showThird)
  $("body").on("click", ".four-img", showFour)


  document.documentElement.style.overflowX = 'hidden';
"hidden"
  
})




