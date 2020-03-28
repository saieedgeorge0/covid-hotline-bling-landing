$(document).ready(function(){
    $(".project-contain").click(function(){
        $(".project-contain").find(".expand-project").css("display", "none");
        $(".project-contain").find(".project").css("padding-top", "20px");
        $(".project-contain").find(".project").css("padding-bottom", "20px");
        $(this).find(".expand-project").css("display", "block");
        $(this).find(".image").css("box-shadow", "black 10px 10px 20px 1px");
        $(this).find(".project").css("padding-top", "50px");
        $(this).find(".project").css("padding-bottom", "30px");
    });
  });