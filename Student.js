/*
*
*
* */
export default class Student{
    constructor(name, sex, age){
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    getDesc() {
        return '名字:'+ this.name+'性别:'+this.sex+'年龄:'+this.age;
    }
}