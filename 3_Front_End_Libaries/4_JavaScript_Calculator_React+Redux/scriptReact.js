/*import React, { Component } from 'react'
import ReactDOM, {render} from 'react-dom'
import { Provider, connect } from 'react-redux'
*/
console.clear();

//Redux

const ADD_TODIS='ADDTD';
const CLEAR='CLEAR';
const RESULT='RES'

const addToDisplay = (char) => {
 return{ type: ADD_TODIS,
         char: char}
};

const clearAndAdd = (str) => {
 return{ type: CLEAR,
         str: str}
};

const getEquation = (str) => {
 return{ type: RESULT,
         str: str}
};

function reducer(state='0',action){
  switch(action.type){
    case ADD_TODIS:
      return state.concat(action.char);
    case CLEAR || RESULT:
      return ''.concat(action.str);
    default:
      return state;
  }
}

function forbiddenAddingMiddleware({getState,dispatch}){
  return function(next){
    return function (action){
      let str=getState();
      let len=str.length;
      console.log("amiddleware:"+str+"ssss:"+eval('0/8'));
      
      if(action.type==ADD_TODIS){
        
        if(str=='-'){
          if(action.char=='*' || action.char=='/' || action.char=='+' || action.char=='-'){
              if(str[len-1]=='-'){
                return dispatch({type:'OPERATOR_AFTER_MIN'});
              }
          }
        }
        
        if(str=='0'){
          
          if(action.char!='0' && action.char!='.' && action.char!='/' && action.char!='*' && action.char!='+' && action.char!='Clr')
            return dispatch(clearAndAdd(action.char));
          
          if(action.char=='0')
            return dispatch({type: 'MULTIPLE_ZEROS'});
          
        }else{
          
          if((str[len-2]=='*' || str[len-2]=='/' || str[len-2]=='+' || str[len-2]=='-')&& str[len-1]=='0' && action.char=='0'){
               
              return dispatch({type: 'MULTIPLE_ZEROS'});
              }
          
          if((str[len-1]=='*' || str[len-1]=='/' || str[len-1]=='+' || str[len-1]=='-')&& action.char=='.'){
               
                return dispatch({type:'DEC_AFTER_OP'});
              }
         
          
          if(action.char=='*' || action.char=='/' || action.char=='+' || action.char=='-'){
             
              if(str[len-1]=='.'){
                return dispatch({type:'OPERATOR_AFTER_DEC'});
              }
            
              if(str[len-1]!='*' || str[len-1]!='/' || str[len-1]!='+' || str[len-1]!='-'){
                document.getElementById('decimal').disabled=false;
              }
          }
          
          
        }
        if(action.char=='.')
          document.getElementById('decimal').disabled=true;
        
        if(action.char=='Clr'){
          document.getElementById('decimal').disabled=false;
          return dispatch(clearAndAdd('0'));
        }
        
        
      }
      if(action.type==RESULT){
        
        //console.log("im in midleware result:"+action.str)
        let dis=action.str;
        let ind=0;
        let indOp=0;
        let resString='';
        if(dis!='0.'){
      
          while(ind<dis.length){
            if(isNaN(parseFloat(dis[ind]))){
              indOp++;
              if(indOp<=2)
                resString+=dis[ind];

            }else{
              if(indOp>=2){ resString=resString.slice(0,resString.length-2);
                if(dis[ind-1]!='-'){
                  resString+=dis[ind-1];  
                }
                if(dis[ind-1]=='-' && dis[ind-2]=='-'){
                 resString+='+';  
                }
                if(dis[ind-1]=='-' && dis[ind-2]!='-'){
                 resString+=dis[ind-2]+dis[ind-1];  
                }
              }
              resString+=dis[ind];
              indOp=0;
            }
            ind++;  
          }
        }
        
      if(!isNaN(parseFloat(resString[resString.length-1]))){
          let res=eval(resString);//.toFixed(4);
          if(isFloat(res))
            document.getElementById('decimal').disabled=true;
          else
            document.getElementById('decimal').disabled=false;

          return dispatch(clearAndAdd(res));

      }else{
    if(resString[resString.length-1]=='.'){
      document.getElementById('decimal').disabled=false;
      return dispatch(clearAndAdd(resString.slice(0,resString.length-1)));
    }else{
       return dispatch(clearAndAdd(resString.slice(0,resString.length-2)));
    }     
      }
        
        
      }
      
      return next(action);
    }
  }
}



const store=Redux.createStore(reducer, Redux.applyMiddleware(forbiddenAddingMiddleware));



//React

const Display = (props) => {
    return (
      <div id="dis">
           <h4>Display:</h4>
           <p id="display">{props.string}</p>
      </div>
  );
};

function isFloat(n) {
    return n === +n && n !== (n|0);
}

function changeToChar(str){
  
  switch(str){
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    case 'zero':
      return '0';
    case 'add':
      return '+';
    case 'subtract':
      return '-';
    case 'multiply':
      return '*';
    case 'divide':
      return '/';
    case 'decimal':
      return '.';
    case 'clear':
      return 'Clr';
    case 'equals':
      return '=';
    default:
      return 'SomethingWentWrong'
      
  }
}

const ButtonRow = (props) => {
  
  if(props.flag!=1){
  return(
    <div className='d-flex justify-content-center row'>
        <div className="btn-group btn-group-lg" role="group" aria-label="First numbers group">
            <button onClick={props.funcNum} id={props.idTabNum[0]} type="button" className="btnwdth btn btn-primary">{changeToChar(props.idTabNum[0])}</button>
            <button onClick={props.funcNum} id={props.idTabNum[1]} type="button" className="btnwdth btn btn-primary">{changeToChar(props.idTabNum[1])}</button>
            <button onClick={props.funcNum} id={props.idTabNum[2]} type="button" className="btnwdth btn btn-primary">{changeToChar(props.idTabNum[2])}</button>
          </div>
          <div class="btn-group" role="group" aria-label="Second operators group">
            <button onClick={props.funcNum} id={props.idTabOp[0]} type="button" className="opwdth btn btn-dark">{changeToChar(props.idTabOp[0])}</button>
            <button onClick={props.funcNum} id={props.idTabOp[1]} type="button" className="opwdth btn btn-dark">{changeToChar(props.idTabOp[1])}</button>
          </div> 
    </div>
  
  );
  }else{
    
    return(
    <div className='d-flex justify-content-center row'>
        <div className="btn-group btn-group-lg" role="group" aria-label="Last row group">
            <button onClick={props.funcNum} id={props.idTabNum[0]} type="button" className="btnwdth btn btn-primary">{changeToChar(props.idTabNum[0])}</button>
            <button onClick={props.funcRes} id={props.idTabOp[0]} type="button" className="btnwdth btn btn-success">{changeToChar(props.idTabOp[0])}</button>
        </div>
    </div>
  );
  }
  
};

class App extends React.Component{
  constructor(props){
    super(props);
    
  this.sampleFunction=this.sampleFunction.bind(this);
  this.resultFunction=this.resultFunction.bind(this);  
  }
  
  sampleFunction = (event) => {
    event.preventDefault();
    //console.log(event.target.innerHTML,event.target.id);
    this.props.newCharToDis(event.target.innerHTML);
    console.log(store.getState());
    /*this.setState({
      result: store.getState()
    });
  console.log("setState:"+this.state.result);*/
  }
  
  resultFunction = (event) => {
    event.preventDefault();
    
    this.props.getResult(store.getState());
    //console.log("setState:"+this.state.result);
    
  };
  
  render(){
    return (
    <main>
      <h1 className="text-center">Calculator</h1>
      <div id="calc">
          <Display string={this.props.result}/> 
          <ButtonRow idTabOp={['add','subtract']} idTabNum={['one','two','three']} funcNum={(event) => this.sampleFunction(event)}/>
          <ButtonRow idTabOp={['divide','multiply']} idTabNum={['four','five','six']} funcNum={(event) => this.sampleFunction(event)}/>
          <ButtonRow idTabOp={['decimal','clear']} idTabNum={['seven','eight','nine']} funcNum={(event) => this.sampleFunction(event)}/>
          <ButtonRow funcRes={(event) => this.resultFunction(event)} flag={1} idTabOp={['equals']} idTabNum={['zero']} funcNum={(event) => this.sampleFunction(event)}/>
      </div>
    </main>
    
    );
  }
  
};

//React+

const mapStateToProps = (state) => {
  return {result: state}
};

const mapDispatchToProps = (dispatch) => {
  return{ newCharToDis: (newChar) => {dispatch(addToDisplay(newChar))},
          getResult: (str) => {dispatch(getEquation(str))}}
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container =connect(mapStateToProps,mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


ReactDOM.render(<AppWrapper/>,document.getElementById('root'));