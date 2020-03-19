import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Examples extends Component {
    constructor(){
        super()
        this.state = {
            blog:[],
            mymsg:'My Listss',
            content:'',
            title:''
        }
       
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlerContent(e){
         this.setState({
             content:e.target.value
         })
    }

    handlerTitle(e){
        this.setState({
            title:e.target.value
        })
   }
 
   handleSubmit(e){
       e.preventDefault();
       axios.post('/store',{
           title:this.state.title,
          content:this.state.content
       }).then(response=>{ this.setState({
            blog:response.data
          })
       }).catch(function (error) {
        console.log(error);
    });
   }

    componentDidMount(){
        axios.get('/blog').then(response=>{this.setState({blog:response.data})}).catch(error=>{console.log(error)})
    }


    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{this.state.mymsg}</div>
                      
                    <div> 
                        <input type="text" onChange={this.handlerTitle.bind(this)} value={this.state.title}/><br></br>
                        <textarea onChange={this.handlerContent.bind(this)} value={this.state.content}></textarea>><br></br>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>

                    <div className="card-body">
                        {
                        this.state.blog.map(
                            data => 
                            <div>
                            <h4> {data.id} </h4>
                            </div>
                        )
                      }
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//if (document.getElementById('example')) {
 //   ReactDOM.render(<Examples />, document.getElementById('example'));
//}
