import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

    // const styles = {
    //     headline: {
    //         width:'100%',
    //         fontSize:20,
    //         paddingTop:0,
    //         paddingBottom :0,
    //         //fontWeight:400,
    //         minWidth: 500,
    //
    //     },
    // };

export default class HnTabs extends React.Component{
    constructor(pr){
        super(pr);
        this.state = {
            'value' : 'a'
        };
    }
    handleChange = (value) =>{
        this.setState({
            value: value
        });
    }
    render(){
        return(
        <div className="tab-wraped">
            <div className="label">S/N</div>
            <Tabs
                onChange={this.handleChange}
                value={this.state.value}
                className="tabs"
            >
                <Tab label="Tab One" value={0} />
                <Tab label="Tab Two" value={1} />
            </Tabs>
        </div>

        )
    }
}