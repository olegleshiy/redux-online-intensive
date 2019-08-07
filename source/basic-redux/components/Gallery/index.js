// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Actions
import { showPrevPhoto, showSelectedPhoto, showNextPhoto } from '../../bus/gallery/actions';

// Store
import { store } from '../../init/store';

// Instruments
import Styles from './styles.m.css';

@hot(module)
export default class Gallery extends Component {
    _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
        this.forceUpdate();
    };

    _showSelectedPhoto = (event) => {
        const currentImg = event.target.value;
        store.dispatch(showSelectedPhoto(currentImg));
        this.forceUpdate();
    };

    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate();
    };

    render () {
        const state = store.getState();
        const selectedPhoto = state.gallery.photos.find(
            (_, photoIndex) => photoIndex === state.gallery.selectedPhotoIndex,
        );

        return (
            <section className = { Styles.gallery }>
                <img src = { selectedPhoto.url } />
                <div>
                    <button onClick = { this._showPrevPhoto }>←</button>
                    <button className = { Styles.buttonActive } value = '0' onClick = { this._showSelectedPhoto }>1</button>
                    <button value = '1' onClick = { this._showSelectedPhoto }>2</button>
                    <button value = '2' onClick = { this._showSelectedPhoto }>3</button>
                    <button value = '3' onClick = { this._showSelectedPhoto }>4</button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}
