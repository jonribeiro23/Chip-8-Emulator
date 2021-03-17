import {Chip8} from './Chip8'
const chip8 = new Chip8()

async function runChip8(){
    while(1){
        const haskeydown = chip8.keyboard.hasKeydown()
        const iskeydown = chip8.keyboard.hasKeydown(1)

        console.log('haskeydown ', haskeydown)
        console.log('iskeydown ', iskeydown)

        await chip8.sleep()
    }
}

runChip8()