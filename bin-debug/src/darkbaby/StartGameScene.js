/**
 * startgame
 * Created by pior on 15/12/8.
 */
var DarkBady;
(function (DarkBady) {
    var StartGameScene = (function (_super) {
        __extends(StartGameScene, _super);
        function StartGameScene() {
            _super.call(this);
            this.init();
        }
        var __egretProto__ = StartGameScene.prototype;
        __egretProto__.init = function () {
            this.mstage = GameUtil.GameScene.getInstance().getMainStage();
            var bg = GameUtil.createBitmapByName("bgImage");
            this.addChild(bg);
            bg.x = this.mstage.stageWidth / 2;
            bg.y = this.mstage.stageHeight / 2;
        };
        return StartGameScene;
    })(egret.DisplayObjectContainer);
    DarkBady.StartGameScene = StartGameScene;
    StartGameScene.prototype.__class__ = "DarkBady.StartGameScene";
})(DarkBady || (DarkBady = {}));
