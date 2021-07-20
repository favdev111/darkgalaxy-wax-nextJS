import * as _ from 'lodash';

export const viewImage = (id, race) => (dispatch, getState) => {
    const currentState = _.cloneDeep(getState().artPage);
    const { pageItems } = currentState;
    let currentRace;
    for (let [key, value] of Object.entries(pageItems)) {
        if (key === race) {
            currentRace = value;
        }
    }
    const itemToDisplay = currentRace.find(item => item.id === id);
    dispatch({ type: 'SET_LIGHTBOX_ITEM', lightboxItem: itemToDisplay });
    dispatch({ type: 'OPEN_LIGHTBOX' });
};

export const closeLightbox = () => dispatch => {
    dispatch({ type: 'CLOSE_LIGHTBOX' });
    dispatch({ type: 'UNSET_LIGHTBOX_ITEM' });
};

export const toggleImage = direction => (dispatch, getState) => {
    const currentState = _.cloneDeep(getState().artPage);
    const { lightboxItem, pageItems } = currentState;
    const { race, id } = lightboxItem;
    let currentRace;
    for (let [key, value] of Object.entries(pageItems)) {
        if (key === race) {
            currentRace = value;
        }
    }
    const lightboxItemIndex = currentRace.findIndex(item => item.id === id);
    const lastIndex = currentRace.length - 1;
    let newItemToDisplay;
    if (direction === 'next') {
        newItemToDisplay = lightboxItemIndex === lastIndex ? currentRace[0] : currentRace[lightboxItemIndex + 1];
    } else if (direction === 'prev') {
        newItemToDisplay = lightboxItemIndex === 0 ? currentRace[lastIndex] : currentRace[lightboxItemIndex - 1];
    }
    dispatch({ type: 'SET_LIGHTBOX_ITEM', lightboxItem: newItemToDisplay });
};

export const toggleSelector = id => dispatch => {
    dispatch({ type: 'UNSET_SELECTOR_ITEM' });
    dispatch({ type: 'SET_SELECTOR_ITEM', id });
};