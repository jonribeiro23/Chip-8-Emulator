import { Keyboard } from './Keyboard';
import { CHAR_SET } from './constants/charSetConstants';
import { CHAR_SET_ADDRESS } from './constants/memoryConstants';
import { Display } from './Display'
import { Memory } from "./Memory";
import { Registers } from './Registers';
import { TIMER_60_HZ } from './constants/registersConstants';

export class Chip8{
	constructor(){
        console.log('Creating a new chip8')
        this.memory = new Memory()
        this.loadCharSet()
        this.register = new Registers()
        this.keyboard = new Keyboard()
        
        this.display = new Display(this.memory)
    }

    sleep(ms = TIMER_60_HZ){
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    loadCharSet(){
        this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS)
    }
}