/// <reference path="game.d.ts" />
let fakeStorage: FakeStorage = {
	_data: {},
	setItem(id, val) {
		return this._data[id] = String(val)
	},
	getItem(id) {
		return this._data.hasOwnProperty(id) ? this._data[id] : undefined
	},
	removeItem(id) {
		return delete this._data[id]
	},
	clear() {
		return this._data = {}
	}
}
window.fakeStorage = fakeStorage

export class LocalStorageManager {
	bestScoreKey: string
	gameStateKey: string
	storage: FakeStorage | Storage
	localStorageSupported(): boolean {
		var testKey = "test"
		var storage = window.localStorage

		try {
			storage.setItem(testKey, "1")
			storage.removeItem(testKey)
			return true
		} catch (error) {
			return false
		}
	}
	// Best score getters/setters
	getBestScore() {
		return this.storage.getItem(this.bestScoreKey) || 0
	}
	setBestScore(score) {
		this.storage.setItem(this.bestScoreKey, score)
	}
	// Game state getters/setters and clearing
	getGameState() {
		var stateJSON = this.storage.getItem(this.gameStateKey)
		return stateJSON ? JSON.parse(stateJSON) : null
	}
	setGameState(gameState) {
		this.storage.setItem(this.gameStateKey, JSON.stringify(gameState))
	}
	clearGameState() {
		this.storage.removeItem(this.gameStateKey)
	}
	constructor() {
		this.bestScoreKey = "bestScore"
		this.gameStateKey = "gameState"
		var supported = this.localStorageSupported()
		this.storage = supported ? window.localStorage : window.fakeStorage
	}
}