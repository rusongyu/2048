/// <reference path="./game.d.ts" />
export class Tile {
	x: number
	y: number
	value: number
	mergedFrom: any
	previousPosition: GamePosition
	savePosition() {
		this.previousPosition = { x: this.x, y: this.y }
	}
	updatePosition(position) {
		this.x = position.x
		this.y = position.y
	}
	serialize() {
		return {
			position: {
				x: this.x,
				y: this.y
			},
			value: this.value
		}
	}
	constructor(position: GamePosition, value: number) {
		this.x = position.x
		this.y = position.y
		this.value = value || 2

		this.previousPosition = null
		this.mergedFrom = null // Tracks tiles that merged together
	}
}
