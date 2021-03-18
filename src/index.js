import {Chip8} from './Chip8'
const chip8 = new Chip8()

async function runChip8(){
    chip8.display.drawSprite(10, 1, 15, 5)
    chip8.display.drawSprite(10, 6, 5, 5)
    chip8.display.drawSprite(10, 11, 25, 5)
    chip8.display.drawSprite(10, 16, 20, 5)
}

runChip8()