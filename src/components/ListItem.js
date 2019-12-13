import React,{ Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { selectLibrary } from '../actions'
import { connect } from 'react-redux';
class ListItem extends Component{
    renderDescription = ()=>{
        const { item, selectedLibraryId } = this.props;
        if(item.id==selectedLibraryId){
            return (
                <View style={{padding:10,marginTop:3}}>
                    <Text>{item.description}</Text>
                </View>
            )
        }
    }

    render(){
        const {item} = this.props;
        const {id, title} = item;
        return(
            <View>
            <TouchableOpacity onPress={()=>{ this.props.selectLibrary(id)}} style={{ margin:10,padding:10,borderColor:'#DADADA',borderWidth:1 }}>
               <Text>{item.title}</Text>
            </TouchableOpacity>
             {this.renderDescription()}
            </View>
            
        )
    }
}

const mapStateToProps = state =>{
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}
export default connect(mapStateToProps,{ selectLibrary })(ListItem)