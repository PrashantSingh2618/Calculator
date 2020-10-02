<template>
     
<div class="container">
  <div class="calc-body">
    <div class="calc-screen">
      <div class="calc-operation" v-cloak>{{ input }} </div>
      <div class="calc-typed" v-cloak> {{ result }}</div>
    </div>
    <div class="calc-button-row">
      <button class="button c" @click="clearAll" >CE</button>
      <div class="button l" @click="clear"> C</div>
      <div class="button l" @click="operation('%')" >%</div>
      <div class="button l" @click="operation('/')" >/</div>
    </div>
    <div class="calc-button-row">
      <div class="button" @click="operation('7')" >7</div>
      <div class="button" @click="operation('8')"> 8</div>
      <div class="button" @click="operation('9')">9</div>
      <div class="button l" @click="operation('*')"> x</div>
    </div>
    <div class="calc-button-row">
      <div class="button" @click="operation('4')" >4</div>
      <div class="button" @click="operation('5')">5</div>
      <div class="button" @click="operation('6')">6</div>
      <div class="button l" @click="operation('-')">−</div>
    </div>
    <div class="calc-button-row">
      <div class="button" @click="operation('1')">1</div>
      <div class="button" @click="operation('2')">2</div>
      <div class="button" @click="operation('3')">3</div>
      <div class="button l" @click="operation('+')">+</div>
    </div>
    <div class="calc-button-row">
      <div class="button" @click="operation('.')">.</div>
      <div class="button" @click="operation('0')">0</div>
      <div class="button">#</div>
          <div class="button l" @click="equal" >=</div>
      </div>
    </div>
  </div>



</template>

<script>
export default{
    data(){
        return {
            input:'',
            result: 0
        };
    },
    methods:{
        operation(inp){
            this.input +=inp ;
            if(inp!='+'||inp!='-'||inp!='/'||inp!='%')
            this.equal();
        },
        clearAll(){
            this.input ='';
            this.result = 0 ;
        },
        clear(){
            this.input = this.input.slice(0,-1) ;
            this.equal();
        },
        equal(){
            let temp=eval(this.input).toString();
            // console.log(typeof(temp));
            if(temp.length>10)
            this.result =eval(this.input).toExponential() ;
            else
            this.result=eval(this.input);

            
        }


    }
};
</script>

<style >

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: #d4dada;
}

.container {
  padding-top: 10%;
  padding-right: 15%;
  width: 50%;
  margin: auto;
}

.calc-body {
  width: 50%;
  margin: auto;
  min-height: 400px;
  border: solid 1px #d4dada;
  box-shadow: 0 8px 50px -7px black;
}

.calc-screen {
  background: #3A4655;
  width: 180%;
  height: 150px;
  padding: 20px;
}

.calc-operation {
  text-align: right;
  color: #727B86;
  font-size: 21px;
  padding-bottom: 10px;
  border-bottom: dotted 1px;
}

.calc-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #fff;
}

.calc-button-row {
  width: 180%;
  background: #3C4857;
}

.button {
  width: 25%;
  background: #425062;
  color: #fff;
  padding: 20px;
  display: inline-block;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  margin-right: -4px;
  border-right: solid 2px #3C4857;
  border-bottom: solid 2px #3C4857;
 
}

.button.l {
  color: #2a6dcb;
  background: #5a9194;
}

.button.c {
  color: #D95D4E;
  background: #425062;
}

.button:hover {
  background: #9d4f06;
}

.button.c:hover,
.button.l:hover {
  background: #9d4f06;
  color: #fff;
}


</style>
