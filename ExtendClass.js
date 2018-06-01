/*
*
*
* */
import Student from './Student'
export default class  SomeStu extends Student {
    constructor(name,age,height){
        super(name, age);
        this.height = height;
    }
    getDesc() {
        return super.getDesc()+'身高:'+ this.height;
    }
}