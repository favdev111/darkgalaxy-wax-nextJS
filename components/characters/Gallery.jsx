import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { viewImage } from '../../redux/pages/characters/actions';
import { setResponsiveMode } from '../../redux/pages/resp/actions';
import GalleryItem from './GalleryItem';

const Gallery = ({ 
    artPage: { 
        pageItems 
    }, 
    responsivePage: {
        responsiveMode
    },
    viewImage,
    setResponsiveMode 
}) => {
    useEffect(() => {
        let widthOfScreen = document.documentElement.clientWidth;
        setResponsiveMode(widthOfScreen);
    }, []);

    return (
        <React.Fragment>
            <h3 style={{ marginTop: '20px' }} id='androids'>Androids</h3>
            <GalleryItem
                itemsList={pageItems.androids}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
            <h3 style={{ marginTop: '20px' }} id='humanity'>Humanity</h3>
            <GalleryItem
                itemsList={pageItems.humanity}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
            <h3 style={{ marginTop: '20px' }} id='creatures'>Creatures</h3>
            <GalleryItem
                itemsList={pageItems.creatures}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
            <h3 style={{ marginTop: '20px' }} id='luma'>Order of the Luma</h3>
            <GalleryItem
                itemsList={pageItems.luma}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
            <h3 style={{ marginTop: '20px' }} id='dread'>The Dread</h3>
            <GalleryItem
                itemsList={pageItems.dread}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
            <h3 style={{ marginTop: '20px' }} id='jujari'>Jujari</h3>
            <GalleryItem
                itemsList={pageItems.jujari}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />               
            <h3 style={{ marginTop: '20px' }}>Artifacts</h3>
            <GalleryItem
                itemsList={pageItems.artifacts}
                viewImage={viewImage}
                responsiveMode={responsiveMode}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    artPage: state.artPage,
    responsivePage: state.responsivePage
});

const mapDispatchToProps = {
    viewImage,
    setResponsiveMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);