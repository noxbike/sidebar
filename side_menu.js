$(function(){
    $('.logo').click(function(){
        
        var boxWidth = $('.sidebar').width();
        var wiDth = boxWidth == '490' ? '147' : '490';
        
        $(".sidebar").animate({ width: wiDth });
        $("span").toggle('slow');
    })
})