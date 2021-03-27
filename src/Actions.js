export const loadData = () => {
    return function(dispatch) {
        dispatch({ type: 'start' })

        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "load",
                    payload: json
                })
            })
    }
}

export const removeItem = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=10/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "delete",
                    payload: id
                })
            })
    }
}