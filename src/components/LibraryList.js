import React,{Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
class LibraryList extends Component{
    keyExtractor = (item,index) => index.toString();
    renderItem = ({ item }) =>{
        return <ListItem item={item} />
    }
    
    render(){
        const { LibraryList }  = this.props;
        return (
            <FlatList 
                ListHeaderComponent={
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}} >
                       Technologies List
                    </Text>
                }
                data={LibraryList}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
             />
        )
    }
}

const mapStateToProps = state =>{
    return {
        LibraryList: state.libraries
    }
}

export default connect(mapStateToProps,null)(LibraryList)