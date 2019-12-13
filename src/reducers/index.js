import { combineReducers } from 'redux';
import LibraryReducer from  './LibraryReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId:selectionReducer
});