interface Window {
	requestAnimationFrame(): number
	fakeStorage: FakeStorage
	DOMTokenList: DOMTokenList
	Element: Function
}

interface FakeStorage {
	_data: {}
	setItem(id, val): string
	getItem(id): any
	removeItem(id): boolean
	clear(): {}
}

interface GameManager {

}
// interface LocalStorageManager {
//     bestScoreKey:string
//     gameStateKey:string
//     storage:any
//     localStorageSupported():void
//     getBestScore(): string|number
//     setBestScore(score): void
// }
interface GamePosition {
	x: number
	y: number
}
interface MSGestureEvent {
	touches: any[]
	targetTouches: any
	pageX: number
	pageY: number
	changedTouches: {
		clientX: number
		clientY: number
	}[]
}