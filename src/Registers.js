import { NUMBER_OF_REGISTERS, STACK_DEEP } from "./constants/registersConstants";
import { LOAD_PROGRAM_ADRESS } from "./constants/memoryConstants";

export class Registers{
    constructor(){
        this.V = new Uint8Array(NUMBER_OF_REGISTERS)
        this.I = 0
        this.delayTimer = 0
        this.soundTimer = 0
        
        //Program counter
        this.PC = LOAD_PROGRAM_ADRESS

        //Stack Pointer
        this.SP = -1

        this.stack = new Uint8Array(STACK_DEEP)

        this.reset()

    }

    reset(){
        this.V.fill(0)
        this.I = 0
        this.delayTimer = 0
        this.soundTimer = 0
        this.PC = LOAD_PROGRAM_ADRESS
        this.SP = -1
        this.stack.fill(0)
    }

    stackPush(value){
        this.SP++
        this.assertStackOverflow()
        this.stack[this.SP] = value
    }

    stackPop(){
        const value = this.stack[this.SP]
        this.SP--
        this.assertStackUnderflow()
        return value
    }

    assertStackOverflow(){
        console.assert(this.SP < STACK_DEEP, 'Error stack overflow')
    }

    assertStackUnderflow(){
        console.assert(this.SP >= -1, 'Error stack underflow')
    }
}