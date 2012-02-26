/**
 * Created by azu.
 * Date: 12/02/26 14:50
 * License: MIT License
 */
function fnSinon(callback){
    callback && callback();
    return 1;
}
function fnSinonCallArgs(callback){
    callback && callback(1, 2, 3);
}
var targetObject = function(){

}
targetObject.hoge = function(){
    return 1;
}