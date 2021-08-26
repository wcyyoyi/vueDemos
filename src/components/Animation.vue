<template>
  <div class="animation">
    <h1>动画</h1>
    <el-button type="primary" @click="goBack()">返回</el-button>
    <canvas id="renderCanvas"></canvas>
  </div>
</template>

<script>
  import * as BABYLON from "babylonjs"
  export default {
    name: 'Animation',
    mounted() {
      this.drawScene();
    },
    methods: {
      goBack() {
        history.back(-1);
      },
      drawScene() {
        let canvas = document.getElementById("renderCanvas"); // 获取到renderCanvas这个要素
        let engine = new BABYLON.Engine(canvas, true); // 在这里创建巴比伦引擎
        let scene = this.creatScene(engine, canvas); /* 下面解释createScene()函数怎么用，首先调用它并赋值给一个变量 */
        // 注册一个渲染循环来重复渲染场景
        engine.runRenderLoop(function() {
          scene.render();
        });

        // 观察浏览器/画布的“resize”事件，也就是大小出现调整的事件
        window.addEventListener("resize", function() {
          engine.resize();
        });
      },
      creatScene(engine, canvas) {
        /******* 下面就是类似于Playgroud里面createScene函数，但是有一些改动 ******/
        let scene = new BABYLON.Scene(engine);
        // 这里使用了另一种相机
        let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0,
          5), scene);
        camera.attachControl(canvas, true);
        // 更改成了两束光构成的混合光
        new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

        let sphere1 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 10
        }, scene);
        let sphere2 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere3 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere4 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere5 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere6 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere7 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere8 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);
        let sphere9 = BABYLON.MeshBuilder.CreateSphere("mySphere", {
          diameter: 4
        }, scene);

        sphere1.position.x = 0;
        sphere1.position.y = 0;
        sphere1.position.z = 0;

        sphere2.parent = sphere1;
        sphere2.position.x = -12;

        sphere3.parent = sphere1;
        sphere3.position.z = -12;

        sphere4.parent = sphere1;
        sphere4.position.z = 12;

        sphere5.parent = sphere1;
        sphere5.position.x = -Math.sqrt(72);
        sphere5.position.z = Math.sqrt(72);

        sphere6.parent = sphere1;
        sphere6.position.x = -Math.sqrt(72);
        sphere6.position.z = -Math.sqrt(72);

        sphere7.parent = sphere1;
        sphere7.position.x = Math.sqrt(72);
        sphere7.position.z = Math.sqrt(72);

        sphere8.parent = sphere1;
        sphere8.position.x = Math.sqrt(72);
        sphere8.position.z = -Math.sqrt(72);

        sphere9.parent = sphere1;
        sphere9.position.x = 12;

        var animationBox2 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus2 = [];
        keysTorus2.push({
          frame: 0,
          value: sphere2.position
        });
        keysTorus2.push({
          frame: 100,
          value: sphere6.position
        });
        keysTorus2.push({
          frame: 200,
          value: sphere3.position
        });
        keysTorus2.push({
          frame: 300,
          value: sphere8.position
        });
        keysTorus2.push({
          frame: 400,
          value: sphere9.position
        });
        keysTorus2.push({
          frame: 500,
          value: sphere7.position
        });
        keysTorus2.push({
          frame: 600,
          value: sphere4.position
        });
        keysTorus2.push({
          frame: 700,
          value: sphere5.position
        });
        keysTorus2.push({
          frame: 800,
          value: sphere2.position
        });
        animationBox2.setKeys(keysTorus2);
        sphere2.animations = [];
        sphere2.animations.push(animationBox2);
        scene.beginAnimation(sphere2, 0, 800, true);

        var animationBox6 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus6 = [];
        keysTorus6.push({
          frame: 0,
          value: sphere6.position
        });
        keysTorus6.push({
          frame: 100,
          value: sphere3.position
        });
        keysTorus6.push({
          frame: 200,
          value: sphere8.position
        });
        keysTorus6.push({
          frame: 300,
          value: sphere9.position
        });
        keysTorus6.push({
          frame: 400,
          value: sphere7.position
        });
        keysTorus6.push({
          frame: 500,
          value: sphere4.position
        });
        keysTorus6.push({
          frame: 600,
          value: sphere5.position
        });
        keysTorus6.push({
          frame: 700,
          value: sphere2.position
        });
        keysTorus6.push({
          frame: 800,
          value: sphere6.position
        });
        animationBox6.setKeys(keysTorus6);
        sphere6.animations = [];
        sphere6.animations.push(animationBox6);
        scene.beginAnimation(sphere6, 0, 800, true);

        var animationBox3 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus3 = [];
        keysTorus3.push({
          frame: 0,
          value: sphere3.position
        });
        keysTorus3.push({
          frame: 100,
          value: sphere8.position
        });
        keysTorus3.push({
          frame: 200,
          value: sphere9.position
        });
        keysTorus3.push({
          frame: 300,
          value: sphere7.position
        });
        keysTorus3.push({
          frame: 400,
          value: sphere4.position
        });
        keysTorus3.push({
          frame: 500,
          value: sphere5.position
        });
        keysTorus3.push({
          frame: 600,
          value: sphere2.position
        });
        keysTorus3.push({
          frame: 700,
          value: sphere6.position
        });
        keysTorus3.push({
          frame: 800,
          value: sphere3.position
        });
        animationBox3.setKeys(keysTorus3);
        sphere3.animations = [];
        sphere3.animations.push(animationBox3);
        scene.beginAnimation(sphere3, 0, 800, true);

        var animationBox8 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus8 = [];
        keysTorus8.push({
          frame: 0,
          value: sphere8.position
        });
        keysTorus8.push({
          frame: 100,
          value: sphere9.position
        });
        keysTorus8.push({
          frame: 200,
          value: sphere7.position
        });
        keysTorus8.push({
          frame: 300,
          value: sphere4.position
        });
        keysTorus8.push({
          frame: 400,
          value: sphere5.position
        });
        keysTorus8.push({
          frame: 500,
          value: sphere2.position
        });
        keysTorus8.push({
          frame: 600,
          value: sphere6.position
        });
        keysTorus8.push({
          frame: 700,
          value: sphere3.position
        });
        keysTorus8.push({
          frame: 800,
          value: sphere8.position
        });
        animationBox8.setKeys(keysTorus8);
        sphere8.animations = [];
        sphere8.animations.push(animationBox8);
        scene.beginAnimation(sphere8, 0, 800, true);

        var animationBox9 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus9 = [];
        keysTorus9.push({
          frame: 0,
          value: sphere9.position
        });
        keysTorus9.push({
          frame: 100,
          value: sphere7.position
        });
        keysTorus9.push({
          frame: 200,
          value: sphere4.position
        });
        keysTorus9.push({
          frame: 300,
          value: sphere5.position
        });
        keysTorus9.push({
          frame: 400,
          value: sphere2.position
        });
        keysTorus9.push({
          frame: 500,
          value: sphere6.position
        });
        keysTorus9.push({
          frame: 600,
          value: sphere3.position
        });
        keysTorus9.push({
          frame: 700,
          value: sphere8.position
        });
        keysTorus9.push({
          frame: 800,
          value: sphere9.position
        });
        animationBox9.setKeys(keysTorus9);
        sphere9.animations = [];
        sphere9.animations.push(animationBox9);
        scene.beginAnimation(sphere9, 0, 800, true);

        var animationBox7 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus7 = [];
        keysTorus7.push({
          frame: 0,
          value: sphere7.position
        });
        keysTorus7.push({
          frame: 100,
          value: sphere4.position
        });
        keysTorus7.push({
          frame: 200,
          value: sphere5.position
        });
        keysTorus7.push({
          frame: 300,
          value: sphere2.position
        });
        keysTorus7.push({
          frame: 400,
          value: sphere6.position
        });
        keysTorus7.push({
          frame: 500,
          value: sphere3.position
        });
        keysTorus7.push({
          frame: 600,
          value: sphere8.position
        });
        keysTorus7.push({
          frame: 700,
          value: sphere9.position
        });
        keysTorus7.push({
          frame: 800,
          value: sphere7.position
        });
        animationBox7.setKeys(keysTorus7);
        sphere7.animations = [];
        sphere7.animations.push(animationBox7);
        scene.beginAnimation(sphere7, 0, 800, true);

        var animationBox4 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus4 = [];
        keysTorus4.push({
          frame: 0,
          value: sphere4.position
        });
        keysTorus4.push({
          frame: 100,
          value: sphere5.position
        });
        keysTorus4.push({
          frame: 200,
          value: sphere2.position
        });
        keysTorus4.push({
          frame: 300,
          value: sphere6.position
        });
        keysTorus4.push({
          frame: 400,
          value: sphere3.position
        });
        keysTorus4.push({
          frame: 500,
          value: sphere8.position
        });
        keysTorus4.push({
          frame: 600,
          value: sphere9.position
        });
        keysTorus4.push({
          frame: 700,
          value: sphere7.position
        });
        keysTorus4.push({
          frame: 800,
          value: sphere4.position
        });
        animationBox4.setKeys(keysTorus4);
        sphere4.animations = [];
        sphere4.animations.push(animationBox4);
        scene.beginAnimation(sphere4, 0, 800, true);

        var animationBox5 = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation
          .ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keysTorus5 = [];
        keysTorus5.push({
          frame: 0,
          value: sphere5.position
        });
        keysTorus5.push({
          frame: 100,
          value: sphere2.position
        });
        keysTorus5.push({
          frame: 200,
          value: sphere6.position
        });
        keysTorus5.push({
          frame: 300,
          value: sphere3.position
        });
        keysTorus5.push({
          frame: 400,
          value: sphere8.position
        });
        keysTorus5.push({
          frame: 500,
          value: sphere9.position
        });
        keysTorus5.push({
          frame: 600,
          value: sphere7.position
        });
        keysTorus5.push({
          frame: 700,
          value: sphere4.position
        });
        keysTorus5.push({
          frame: 800,
          value: sphere5.position
        });
        animationBox5.setKeys(keysTorus5);
        sphere5.animations = [];
        sphere5.animations.push(animationBox5);
        scene.beginAnimation(sphere5, 0, 800, true);
        return scene;
      }
    },
    watch: {

    }
  }
</script>
<style scoped>
  #renderCanvas {
    width: 100%;
    height: 100%;
    touch-action: none;
  }
</style>
