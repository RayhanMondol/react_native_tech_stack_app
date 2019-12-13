// Action Creator
export const selectLibrary = libraryId =>{
    return {
        type: 'select_library', // Action
        payload: libraryId
    }
}