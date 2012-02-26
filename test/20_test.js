/**
 * Created by azu.
 * Date: 12/02/26 13:24
 * License: MIT License
 */
AsyncTestCase('targetTest_Sinon', {
    'test_sinon_spy' : function(){
        var callback = sinon.spy();
        fnSinon(callback);
        assertTrue(callback.called);
    },
    'test_sinon_spy_args' : function(){
        var callback = sinon.spy();
        fnSinonCallArgs(callback);
        // args[0回目][0番目の引数]
        assertEquals(callback.args[0][0], 1);
    },
    'test_sinon_spy_method' : function(){
        // targetオブジェクトのhogeメソッドをspyする
        var callback = sinon.spy(targetObject, "hoge");
        targetObject.hoge();
        assertTrue(callback.called);
    },
    'test_sinon_stub' : function(){

    }
});