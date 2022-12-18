import React,{Component}from 'react';
import {view,Text} from 'react-native';


export default class Screen2 extends Component
{
    render()
    {
        return(
            <View style={{flex:1,padding:10,justifyContent:'center',padding:10}}>
                <Text style={{fontSize:20}}>
                    The user name is{this.props.navigation.state.params.P1}
                </Text>
            </View>
        );
    }
}