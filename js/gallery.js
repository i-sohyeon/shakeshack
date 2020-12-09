$(function(){
            
    //클릭한 컨트롤 버튼 색상 변경 나머지 서식 제거        
    $('.c_btn01 li').click(function(){
           $('.c_btn01 li').removeClass('on01');
        
            $(this).addClass('on01');
            
             let num = $(this).index();
    console.log(num)
    
    $('#img_box01').animate({left:-(num*700)},400,);
        
    });
    
});