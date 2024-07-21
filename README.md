# chan120714.github.io
## 개요
* 무슨 사이트인가요?

광주고 내부의 지도와 dijkstra 알고리즘을 이용하여 광주고등학교내의 길을 찾아드립니다.
* 왜 만들었나요?
  
광주고등학교를 처음 방문하는 사람들이 길을 못찾는 경우가 자주 있어서 이를 해결하기 위하여 만들었습니다.

## 기능
* 목적지 찾기

이 사이트의 원래 목표이자 이 사이트의 가장 중심적인 기능입니다.

광주고등학교 내부에 있는 곳에 출발지와 목적지를 선택하시면 경로를 알려드립니다.

* 화장실 찾기

화장실은 굉장히 중요합니다. 저는 아니고 제 팀원이 그랬습니다.

실사용보다 디버깅때 더 많이 사용한 것 같습니다.

* HTML 설명 보기

발표때 PPT수정이 안된다길래 사이트에 PPT를 올려서 기능인것처럼 속였습니다.

* 언어 설정

말 그대로 언어 설정용 기능입니다.

작업량이 늘어나게 된 원흉으로, 언어 하나당 js코드를 200줄 정도 짜야합니다.


## 개발자 코멘트
* 이 프로젝트에 대한 이야기를 해봅시다.

이 프로젝트의 시초, 그러니까 β 1.0.0 당시에는 단순히 파이썬으로 글씨만 출력하는 형식이었습니다.

가능한 위치또한 본관 - 창학관 - 진로관의 세 곳 밖엔 없었습니다.(이때도 외국어는 가능했습니다.)

저희는 이걸로 프로젝트가 마무리 될 줄 알았습니다. (당시 코드 600줄)

참고로, 이때 당시의 소스코드는 [여기](https://github.com/chan120714/chan120714/blob/main/%EC%9C%B5%ED%95%A9%EC%A3%BC%EC%A0%9C%ED%83%90%EA%B5%AC)서 볼 수 있습니다.

***

> "그래픽이 있으면 좋겠는데?"

완성품을 보여드렸을때, 선생님께서 하신 말씀입니다.

솔직히 저희 또한 텍스트로만 경로를 설명하는것이 너무 성의가 없었다고 생각하고 있었기에

만들어 진 것이 모든 프로젝트의 모태, v 1.0.0 입니다.

이때의 업데이트로는 graphic 과 세종관 - 후관동 추가 였습니다. (파이썬 코드 900 줄)

이때의 코드가 궁금하시다면, [여기](https://github.com/chan120714/gjhs_navigate)에서 다운로드 받아서 직접 해볼수 있습니다.

***

> "혹시 웹으로는 못만들까? 아, 지금 하라는건 아니고 방학때라도"

선생님께서 위의 결과물을 보시고 하신 말씀입니다.

일단 그래픽이라는 목표는 달성했었고,

pyscript라는 HTML용 python 모듈이 있다는 걸 알게되어 무난 할 줄 알았으나...




pyscript는 turtle, 즉 파이썬에서 그래픽을 이용하기 위해서 사용했던 모듈을 지원하지 않았습니다. 안타깝네요.

웹으로 만들고 싶었던 욕심을 버리지 못하고 결국 HTML에 손을 대기 시작합니다.

이걸 웹 ver 1.0.0 이라고 합니다. (당시 파이썬 950 + 웹 버전 600 줄 )

***

> "화살표를 만들어서 확실히 벡터다! 라는 느낌을 낼 수 있을까?"

> "아 선생님 구현이..."

> "회전행렬 쓰면 되지않을까?"

7/18, 즉 발표 하루 전인 목요일의 대화 입니다. (각색이 조금 있습니다.)

오후 5시에 시작한 화살표의 개발은 석식시간 직전에서야 완성이 되었습니다.

이때 드디어 코드 총합 길이가 2000줄이 넘어갑니다.

그리고 7/19 오전 3시, 발표 5시간 전

드디어 기숙사 제외 모든 건물을 잇는것에 성공하고 자러갔습니다.

아, 참고로 모든 건물을 잇는것은 선생님이 말씀하신게 아닙니다.

오히려 선생님은 회전행렬때 그만하라고 하셨어요

> "아니 나는 계림동산에 가고싶은데! 여기! 없어서! 못가겠네!"

제가 모든 건물을 잇게만든 도균이에게 감사를 표합니다.

어찌되었든간에

**엄청** **어려웠으니까** **좋게** **봐주시길** **바랍니다**
