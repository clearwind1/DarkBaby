/**
 * startgame
 * Created by pior on 15/12/8.
 */

module DarkBady
{
    export class StartGameScene extends egret.DisplayObjectContainer
    {
        private mstage: egret.Stage;
        public constructor(){
            super();
            this.init();
        }

        private init(){

            this.mstage = GameUtil.GameScene.getInstance().getMainStage();

            var bg:egret.Bitmap = GameUtil.createBitmapByName("bgImage");
            this.addChild(bg);
            bg.x = this.mstage.stageWidth/2;
            bg.y = this.mstage.stageHeight/2;
        }

    }
}