import React from 'react';
import ReactDom from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import Table from './Table';
import Data from '../data/data';
import Data2 from '../data/data2';
let arr = Data;
export default class HeaderTable extends React.Component{
    constructor(pr){
        super(pr);
        this.state = {
            'value' : '-1'
        };
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
       setInterval(this.fetchData(value),5000);
    }
    fetchData=(value)=>{
        if(arr === Data){
            arr = Data2;
        }else{
            arr=Data;
        }
        if(value===null){
            this.refs.table.setData(arr);
        }
        switch (value){
            case 0 :
                let array =Tophigh(arr);
                this.refs.table.setData(arr);
                console.log(array);
                break;
            case 1 :
                let array1 =Toplower(arr);
                this.refs.table.setData(array1);
                console.log(array1);
                break;
            default :
                console.log(arr);
                this.refs.table.setData(arr);
        }
    }
    handleChange = (value) =>{
        this.setState({
            value: value
        });
        this.fetchData(value);
    }
    render(){
        return(
            <div>
                <div className="tab-wraped">
                    <div className="label">S/N</div>
                    <Tabs onChange={this.handleChange} value={this.state.value} className="tabs">
                        <Tab  label="Tab One" value={0} />
                        <Tab label="Tab Two" value={1} />
                    </Tabs>
                </div>
                <Table ref="table"/>
            </div>
        )
    }
}

Array.prototype.swap = function(indexA, indexB) {
    swapArrayElements(this, indexA, indexB);
};
 function Toplower(dataArray) {
     for(let i = dataArray.length;i>1;i--){
         for (let j=0;j<i-1;j++){
             if(dataArray[j].price > dataArray[j+1].price){
                 dataArray.swap(j,j+1);
             }
         }
     }
     return dataArray;
     }


function Tophigh(dataArray) {
 for(let i=0; i < dataArray.length-1;i++){
     for (let j=i+1;j < dataArray.length;j++){
         if(dataArray[i].price < dataArray[j].price){
             dataArray.swap(i,j);
         }
     }
     //console.log(dataArray);
 }
 return dataArray;
 };

  let   swapArrayElements= function (arr, i, j)
{
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};


