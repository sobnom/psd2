


$(function(){
  
$(function(){
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
  });

  // ===back to top==
  $(".bottom_to_top").click(function(){
    $("body,html").animate({scrollTop:0},5000)

  });
  $(window).scroll(function(){
    let scroll=$(this).scrollTop()
    console.log(scroll)
    if(scroll>200){
      $(".bottom_to_top").fadeIn(400)
    }
    else{
      $(".bottom_to_top").fadeOut(500)
    }
    if(scroll>130){
      $(".navber").addClass("fixed")

    }else{
      $(".navber").removeClass("fixed")
    }
  })

});


