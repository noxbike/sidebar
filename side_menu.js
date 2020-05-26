$(function(){
    $('.logo').click(function(){
        
        var box = $('.sidebar').width();
        console.log(box);
        var result = box == '490' ? '147' : '490';
        
        $(".sidebar").animate({
            width: result
        });
    })
})