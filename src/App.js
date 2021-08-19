import React from 'react';
import './App.css';
import Item from './itemSection';
import Detail from './detailSection';
import ProductData from './ProductData';

class App extends React.Component {
  state = {
    colorOption: 'https://imgur.com/iOeUBV7.png'
  };

  selectedOption = (pos)=>{
      const selected = ProductData.colorOptions[pos].imageUrl;
      this.setState({colorOption : selected})
  }

  render(){
      return (
        <div className="container">
           <div className="row">
              <Item url={this.state.colorOption} />
              <Detail 
                title={ProductData.title}
                description={ProductData.description}
                styleName={ProductData.colorOptions.styleName}
                selectedOption={this.selectedOption}
              />
           </div>
        </div>
     );
   }
}

export default App;
