import { createApp } from 'vue' ;
import App from './App.vue' ;
import CalculatorFunctions from './components/CalculatorFunctions.vue' ;


const app = createApp(App);
app.component('calc-functions',CalculatorFunctions) ;
app.mount('#app')
