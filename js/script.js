$(document).ready(function() {
    $(".adown1").click(function() {
        $('html, body').animate({ scrollTop: $("#project1").offset().top }, 'slow');
    });
    $(".adown2").click(function() {
        $('html, body').animate({ scrollTop: $("#project2").offset().top }, 'slow');
    });
    $(".adown3").click(function() {
        $('html, body').animate({ scrollTop: $("#project3").offset().top }, 'slow');
    });
    $(".botbutton").click(function() {
        $('html, body').animate({ scrollTop: $("#project1").offset().top }, 'slow');
    });
    $(".apibutton").click(function() {
        $('html, body').animate({ scrollTop: $("#project2").offset().top }, 'slow');
    });
    $(".vizbutton").click(function() {
        $('html, body').animate({ scrollTop: $("#project3").offset().top }, 'slow');
    });

    //     $(".project-contain").hover(function() {
    //         $(this).find(".project").css("padding", "30px 20px 30px");
    //     }, function(){
    //         $(this).find(".project").css("padding", "20px");
    //     });
    //     $(".project-contain").click(function(){
    //         $(".project-contain").find(".expand-project").css("display", "none");
    //         $(".project-contain").find(".project").css("padding-top", "20px");
    //         $(".project-contain").find(".project").css("padding-bottom", "20px");
    //         $(this).find(".expand-project").css("display", "block");
    //         $(this).find(".image").css("box-shadow", "black 10px 10px 20px 1px");
    //         $(this).find(".project").css("padding-top", "50px");
    //         $(this).find(".project").css("padding-bottom", "30px");
    //     });
});