 ## [ 난수 ]

### 핵심 한 줄 요약
    난수를 사용할 때 유사 난수, 안전한 난수 상황에 맞게 적절히 사용하자

### 인트로
- 난수는 무작위로 생성된 값을 뜻한다.
- 무작위로 생성된 숫자를 예측하기 어려운만큼 제어하기도 어렵다.
- 그래서 상황에 맞게 적절히 변형해야 하며, 공정한 게임 규칙을 다룰 때는 철저하게 제어할 수 있는 난수를 사용해야 한다.

### 유사 난수
- 컴퓨터는 이론적으로 완벽한 난수를 생성할 수 없다. => 주어진 명령을 실행해야 하는 기계니까!
- 그래서 컴퓨터는 시드 값으로 난수를 만든다. 이러한 형태로 만들어진 난수를 유사 난수 라고 한다.
- 예측할 수 없는 난수를 생성한다는 특징을 가지고 있다.
- 유사 난수 알고리즘에는 가장 대중적인 메르센 트위스터 알고리즘을 사용한다.
- 시드 값을 기반으로 하기 때문에 어렵지만 예측 가능해서 안전하지 않다!

### seed(시드)?
- 초기 시작점으로 사용되는 값이다.
- 같은 알고리즘을 사용하더라도 시작점이 다르면 서로 다른 난수값이 생성된다.
- 반대로 시드값이 같다면 항상 같은 난수가 생성된다.
- 타임스탬프처럼 단순하게 증가하며 예측이 쉬운 값을 사용하면 예측할 수 있기에 조심해야 한다.

### 안전한 난수
- 유사 난수와 비교해서 생성 속도가 느리지만 예측이 불가능하다. 

### ex) javascript 로 안전한 난수를 만들어보자
```javascript
// => 이건 seed 값을 기반으로 한 유사 난수를 생성한다.
// => 프로그램의 보안과 관련된 로직에서는 Math.random()을 사용하지 않는 것이 좋다.
Math.random() 

// 브라우저
// => Web Crypto API 사용
var array = new Uint32Array(255)
window.crypto.getRandomValues(array)

// node.js
// => crypto 불러와서 사용
const randomBytes = require('crypto').randomBytes(2)
const number = parseInt(randomBytes.toString('hex'), 16)
```

### 공정한 난수, 셔플 백
- 사용자 경험에 직접적인 영향을 끼칠 때는 엄격히 제어해야 한다.
- 제비 뽑기 즉 확률성 로직에 적용해야 사용자는 더 재미있다.
- 그래서 나온 것이 바로 셔플 백이라는 기법이다.
- 기본 아이디어는 사전에 정의된 모든 요소를 담은 컬렉션(가방)에서 요소를 무작위로 선택하고, 선택된 요소를 사용한 후에는 다시 가방에 넣지 않는 것이다.

### ex) 구현 바로 해보자
```javascript
class ShuffleBag {
    private items;
    private originalItems;
    constructor(items) {
        this.originalItems = [...items];
        this.items = [...items];
        this.shuffle();
    }

    shuffle() {
        for (let i = this.items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
        }
    }

    draw() {
        if (this.items.length === 0) {
            this.items = [...this.originalItems];
            this.shuffle();
        }
        return this.items.pop();
    }
}

const startBox = ['A', 'B', 'C', 'D', 'E'];

const shuffleBag = new ShuffleBag(startBox);

// 계속 해서 다 없어지면 시작 배열부터 다시 시작된다.
console.log(shuffleBag.draw()); 
console.log(shuffleBag.draw()); 
console.log(shuffleBag.draw()); 
```

### 난수는 언제 사용할까?
- 식별자를 생성해야 하는 경우
- OTP, 액세스 토큰을 발급해야 하는 경우
- 게임의 규칙으로 사용할 경우
