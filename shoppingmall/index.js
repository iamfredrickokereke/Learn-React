class Product extends React.Component {

    constructor(props) {
      super(props)
      this.buy = this.buy.bind(this);
      this.state = {
        quantity: 0
      };
  
    }
  
    buy() {
      //alert("Thanks, you just bought it")
  
      this.setState({
        quantity: this.state.quantity + 1
      });
    }
    
    show(){
      
      this.props.trigger(this.props.name);
      
    }
  
    render() {
      return ( < div >
         < p > {this.props.name} - ${this.props.price} < /p>
  
        < button onClick = {
          this.buy
        } > Buy < /button>
        
         < button onClick = {
          this.show
        } > Show < /button>
  
        < p > Quantity: {
          this.state.quantity
        }
        item(s) < /p> <hr />< /div>
        
        
      );
    }
  }
  
  
  class Total extends React.Component{
    
    render(){
      
      return( <div> <h3> Total Cash: </h3> </div>);
    }
    
  }
  
  class ProductList extends React.Component{
    
    showProduct(name){
      alert(name, "Product was selected");
    }
    
    render(){
      
      return(
        
        <div>
          < Product name="Nokia" price="100" trigger={this.showProduct}/ >
          < Product name="Infinix" price="140"/ >
          < Product name="Samsung" price="190"/ >
          < Total / >
          
        </div>  
        
        );
      
    }
    
    
  }
  
  ReactDOM.render( < ProductList / > , document.getElementById("root"))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  