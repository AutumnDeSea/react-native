import React, {Component} from 'react';
import {
    AsyncStorage
} from 'react-native';
import keys from '../../../static/data/keys.json';
export var FLAG_LANGUAGE = {
    flag_language:'flag_language_language',
    flag_key: 'flag_language_key'
}
export default class LanguageDao {
    constructor(flag){
        this.flag = flag;
    }
    save(data){
        AsyncStorage.setItem(this.flag,JSON.stringify(data),(err) => {

        })
    }
    fetch() {
        return new Promise((reslove, reject) => {
            AsyncStorage.getItem(this.flag,(err, res) => {
                if(err){
                    reject(err)
                }else{
                    if(res){
                        try{
                            reslove(JSON.parse(res))
                        } catch (e) {
                            reject(e)
                        }
                    }else {
                        var data = this.flag === FLAG_LANGUAGE.flag_key?keys:null;
                        this.save(data);
                        reslove(data)
                    }
                }
            })
        })
    }
}