import React,{Component}from 'react';
import {view,TextInput,Button} from 'react-native';


export default class Screen1 extends Component
{

    constructor(props)
    {
        super(props);
        this.state={username:''};
    }
    render()
    {
        return(
            <View style={{flex:1,padding:10,justifyContent:'center'}}>
            <TextInput
            placeholder="Enter User Name"
            style={{ borderBottomWidth:1,borderBottomColor:'#ff0000',marginBottom:20}}
            onChangeText={username=>this.setState({username})}
            />
            
            <Button
            title='Login'
            onPress={()=>this.props.navigation.navigate('Screen2',{P1:this.state.username})}
            />
            </View>
        );
    }
}