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

describe('냐옹', () => {
    it('멍멍', () => {
        // 셔플 백에 넣을 아이템 예시
        const startBox = ['A', 'B', 'C', 'D', 'E'];

        const shuffleBag = new ShuffleBag(startBox);

        console.log(shuffleBag.draw());
        console.log(shuffleBag.draw());
        console.log(shuffleBag.draw());
        console.log(shuffleBag.draw());
    });
});
