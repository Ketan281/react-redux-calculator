import * as actionTypes from "./action-types"

export const increaseValue = () => {
    return {
        type:actionTypes.INCREMENT
    }
}

export const decreaseValue = () => {
    return {
        type:actionTypes.DECREMENT
    }
}
export const add = (val) => {
	return {
		type: actionTypes.ADD,
	    val
	};
};
export const sub = (val) => {
	return {
		type: actionTypes.SUB,
	    val
	};
};
export const multiply = (val) => {
	return {
		type: actionTypes.MULTIPLY,
	    val
	};
};
export const divide = (val) => {
	return {
		type: actionTypes.MULTIPLY,
	    val
	};
};

