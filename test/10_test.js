/**
 * Created by azu.
 * Date: 12/02/26 13:24
 * License: MIT License
 */
TestCase()
AsyncTestCase('targetTest', {
    // テスト毎に始まる前に実行される
    'setUp' : function(){
        this.clock = sinon.useFakeTimers();
    },
    // setUp -> TEST -> tearDown -> setUp -> TEST2 -> tearDown
    'tearDown' : function(){

    },
    'testTarget' : function(){
        assertEquals(target(), 1);
    },
    'test_sinon_async' : function(){
        var a = 10;
        setTimeout(function(){
            a = 20;
        }, 100)
        assertNotEquals(a, 20);
        this.clock.tick(100);
        assertEquals(a, 20);
    },
    'test_DOM_Comment' : function(){
        // :DOCコメントはテスト事に独立してるので、毎回空になる
        /*:DOC foo = <div>
         <p>foo</p>
         </div>*/
        assertEquals(this.foo.nodeName, "DIV");
    },
    'test_DOM_multiple_comment' : function(){
        // 複数要素が並ぶとdocumentFragment
        /*:DOC foo = <div>
         <p>foo</p>
         </div>
         <div>
         <p>foo</p>
         </div>*/
        assertEquals(this.foo.nodeType, 11);
    }
});