## [ 정규 표현식 ]

### 핵심 한 줄 요약
    이 책은 간단 소개이므로 있다는 것만 알아두고, 연습 사이트 혹은 다른 책으로 적절하게 사용해보자.
### 인트로
- 자바스크립트의 고유 문법이 아니며, 대부분의 프로그래밍 언어와 코드 에디터에 내장되어 있다. 자바스크립트는 ES3부터 도입했다.
- 정규표현식은 주석이나 공백을 허용하지 않고 여러 가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있다.
- 정규 표현식 연습 사이트: https://regexr.com/5mhou

### 간단 RegExp 메서드
- RegExp.exec: 패턴을 검색하여 매칭 결과를 배열로 반환한다.
- RegExp.test: 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
- String.match: 매칭 결과를 배열로 반환한다.

### 간단 플래그
- i: 대소문자를 구별하지 않고 패턴 검색
- g: 모든 문자열을 전역으로 검색
- m: 행이 바뀌더라도 검색 진행
