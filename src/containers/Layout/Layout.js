import React,{Component} from 'react';



import './Layout.css';
import Footer from '../../components/UI/Footer';
import Header from '../../components/UI/Header';
import MainFooter from '../../components/UI/MainFooter';

class Layout extends Component { 

    state = {
        numbers : [1,2,3,'+',4,5,6,'-',7,8,9,'/',0,'%','*','='],
        val:'',
        loading:false,
        display:null,
        header:{
            main:'Calculator Using React, State, Flex',
            sub:'-Peteragnus'
        },
       
    }

    headerData = this.state.header; 
    element = null;
    
    
    
    backspace = ()=>{
       
    
        let value = String(this.state.val);
        // console.log(typeof(value));
        var j = value.slice(0,value.length-1);
    
        this.setState({
            ...this.state,
            val:j
        })

    }

        computeVal = (val)=>{
         

        if(typeof(val) == "string"){
            console.log('string ')
            console.log(val);
             val = val.replace(/^0+/, '');
          
             
                    if(val.match(/\d+\W+$/ || val.match(/^\W+/)) ){
                            console.log('number deteced');
                            console.log(val,"after")
                            return 0    
                          
                    }else 
                    {  
                        try{
                            let a= eval(val);
                            console.log(val,"after")
                            return a
        
                        }
                        catch(e){
                            return "Decimals not allowed"
                        }
                    }
      
        }
        else{
            return val;
        }
        }

        

 capEvent = (item)=>{
    console.log(item);
   
    switch(item){
        case "=":{
            item="";
            this.setState({
                ...this.state,
                loading:true,
                val:this.computeVal(this.state.val),
                display:this.state.val
            });
           
        };break;
        case "C":{
           
            this.setState({
                ...this.state,
                val:'0',
                display:'0'
            })
        };break;
         default:{
            this.setState({
                ...this.state,
                val:this.state.val + String(item)
            })
         }   
    }
    

  
    
}
    
    
  

    componentDidMount(){
        
        document.addEventListener('keydown',(event)=>{


                    if(event.key == "Backspace"){
                        document.getElementById('backspace').className = "active";
                        document.getElementById('backspace').click();
                    }

                    if(event.key == "Enter"){
                        console.log(event.key)
                        document.getElementById('item-=').className = "active";
                        document.getElementById('item-=').click();
                    }


                    if(document.getElementById('item-'+event.key) !== null){
                        document.getElementById('item-'+event.key).className = "active";
                        document.getElementById('item-'+event.key).click()
                    }
              
                 
                    document.addEventListener('keyup',(event)=>{

                        if(document.getElementById('item-'+event.key) !== null){
                            document.getElementById('item-'+event.key).className = "item";
                                
                        }

                        document.getElementById('backspace').className = "item";
                        document.getElementById('item-=').className = "item";
                       
                    })
                    
                })

            }
    

  render(){
    
        const styles={
            fontSize:"18px"
        }
    
      return(
          <div>
        
                <Header main={this.headerData.main} sub={this.headerData.sub}></Header>
              <div className="mainContainer">
          
                    <div className="keypad1">
                        <input placeholder="0" className="InputField" style={this.state.val === "Decimals not allowed" ? styles : null} value={ this.state.val === "Decimals not allowed"  ? "Decimals not allowed Reset and Try again." :this.state.val} />
                        
                    {/* {this.state.loading == true ?<div className="result"  style={this.state.display === "Decimals not allowed" ? styles : null}>{this.state.display}</div>:null} */}
                    {this.state.loading == true ?<div className="result"  >
                        {this.state.display   }
                        
                        </div>:null}
                   
                        
                    </div>
                    <br />

                  <div className="keypad2">

                        {
                            this.state.numbers.map((item,index)=>{
                                return <button ref={(el)=>{this.element=el}} id={"item-"+(item)} className="item" onClick={()=>this.capEvent(item)}>
                                    {item} 
                                </button>
                            })

                            
                        }

                        <button  id={"item-C"} className="item" style={{width:"48%"}} onClick={()=>this.capEvent("C")}>C</button>
                        <button className="item" id="backspace" style={{width:"48%"}} onClick={()=>{this.backspace()}}>	&#8592;</button>
                  
                  </div>
                  <Footer></Footer>
              </div>
            
            <br />
            <br />
            <br />
            
            <MainFooter></MainFooter>
             

          </div>
          
      )
  }
 
  } 
export default Layout;