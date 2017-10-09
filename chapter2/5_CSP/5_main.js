/**
 * [ CSP(Content Security Policy) ]
 * 크롬 익스텐션에서 사용하는 XSS(교차 스크립팅)공격을 막기위한 상위 보안정책
 */

chrome.app.runtime.onLaunched.addListener(function () {
    // 화면의 중심에 윈도우를 위치시킨다.
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = 500;
    var height = 300;

    chrome.app.window.create("index.html", {
        id: "learningVueID",
        outerBounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth-width)/2),
            top: Math.round((screenHeight-height)/2)
        }
    });
});