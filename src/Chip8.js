import { Display } from './Display'
import { Memory } from "./Memory";
import { Registers } from './Registers';

export class Chip8{
	constructor(){
        console.log('Creating a new chip8')
        this.display = new Display()
        this.memory = new Memory()
        this.register = new Registers()
    }
}