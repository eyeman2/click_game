import React, { Component } from "react";
import "./Cards.css";
import Tags from "../../Tags.json"

class Cards extends Component { 

    state = {
        Tags
            };

    // clicked = () => {
    //    Tags  
    // }
    handleOrder = () => {
        let CharArray = this.state.Tags;
        this.setState({ score: this.state.score + 1 });
        CharArray.sort(function(a, b){return 0.5 - Math.random()});
        }
// handleScore = () => {
//   this.setState({ score: this.state.score + 1});
//   if (this.state.score <= this.state.topScore) {
//     this.setState({ topScore: this.state.topScore + 1})
//   }
// };
    // handleOrder = Tags => {
    //     let tag = Tags.length;
    //     let temp;
    //     let index;
    
    //     while (tag > 0){
    //       index = Math.floor(Math.random() * tag);
    //       tag --;
    
    //       temp = Tags[tag];
    //       Tags[tag] = Tags[index];
    //       Tags[index] = temp;
          
    //     }
    //     this.setState({Tags})    
    //     console.log(Tags)
    // };

    render() {
        return (
<div className="container">
<div className="col-md-3 show">
<a href=""><img className="imgs" src={Tags[1].img} alt={Tags[1].name}/></a>

</div>
    
</div>
)
};
}
export default Cards