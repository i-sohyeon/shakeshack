$(document).ready(function () {

    // //부모의 높이를 자식요소 이미지의 높이에 자동으로 맞추기
    // $('.visual').height($('.visual img').height());

    // //브라우저 크기를 조절할 때 마찬가지로 부모의 높이를 자식 요소의 높이와 동일하게 자동 맞추기, 반응형 할 때 많이 쓰임.
    $(window).resize(function () {
        $('.visual').height($('.visual img').height());
    });

    let num = 0; //초깃값 == 처음 이미지가 보이는 값

    //움직이는 함수
    function fadeInOut() {
        //3초 뒤에 보이는 이미지가 숨겨져야 함.
        $('.visual img').fadeOut(); //맨위 이미지부터 숨겨짐


        if (num == 3) { //마지막 이미지가 보일 때
            num = 0; //처음이미지가 나오도록 함.
        } else {
            num++; //다음 이미지가 나오도록 함.
        }
        $('.visual img').eq(num).fadeIn();
        $('.c_btn li:first-child').html(num + 1 + '/' + imgNum
            .length); // 1/3            
    };


    //3초마다 fadeInOut함수를 호출하여 이미지가 자동으로 플레이 되도록한다.
    let Timer = setInterval(fadeInOut, 3000);


    //현재 이미지 번호 표시하기
    let imgNum = $('.visual img');
    console.log(imgNum.length);

    $('.c_btn li:first-child').html(num + 1 + '/' + imgNum.length); // 1/3


    //일시정지를 클릭하면 시간을 제거하여 멈추게 하고 아이콘 모양을 play로 변경한다. 
    //play버튼을 클릭하면 'pause'로 변경하고 다시 자동으로 움직이게 된다.

    $('.c_btn li i').click(function () {
        if ($(this).hasClass('fas fa-play')) {
            //클래스 명의 존재여부를 확인하여
            //있으면 애니메이션을 실행
            Timer = setInterval(fadeInOut, 3000);
            $(this).attr('class', 'fas fa-pause'); //속성값을 변경하여 아이콘 모양을 바꾼다.
        } else {
            $(this).attr('class', 'fas fa-play'); //속성값에 play를 넣어주고
            clearInterval(Timer); //시간을 제거하여 멈추게 한다.
        }
    });


    return false;

});