import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { closeLightbox, toggleImage } from '../../redux/pages/characters/actions';
import { setResponsiveMode } from '../../redux/pages/resp/actions';

const Lightbox = ({     
    artPage: {
        isLightbox,
        lightboxItem
    },
    responsivePage: {
        responsiveMode
    },
    closeLightbox,
    toggleImage,
    setResponsiveMode
}) => {
    useEffect(() => {
        let widthOfScreen = document.documentElement.clientWidth;
        setResponsiveMode(widthOfScreen);
    }, []);

    return (
        <React.Fragment>
            {isLightbox && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: 10,
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div
                        onClick={() => toggleImage('prev')}
                        style={{
                            margin: responsiveMode === 'medium' || responsiveMode === 'small' ? '0 0 20px 10px' : '0 0 0 10px ',
                            cursor: 'pointer',
                            alignSelf: 'center'
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size='2x' />
                    </div>
                    {lightboxItem && (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: responsiveMode === 'large' ? 30 : 40,
                                alignSelf: 'flex-start'
                            }}
                        >
                            <h2
                                style={{
                                    marginBottom: 0,
                                    marginTop: 20,
                                    padding: 20,
                                    fontSize: 21,
                                    textAlign: 'center'
                                }}
                            >
                                {lightboxItem.title}
                            </h2>
                            <img
                                src={lightboxItem.src}
                                style={{
                                    width: (
                                        responsiveMode === 'large' ? 310 :
                                        responsiveMode === 'medium' ? 250 :
                                        responsiveMode === 'small' ? 190 :
                                        350
                                    ),
                                    height: (
                                        responsiveMode === 'large' ? 440 :
                                        responsiveMode === 'medium' ? 360 :
                                        responsiveMode === 'small' ? 270 :
                                        500
                                    ),
                                    marginBottom: 10
                                }}
                            />
                            <p
                                style={{
                                    textAlign: 'center',
                                    width: '70%',
                                    fontSize: (
                                        responsiveMode === 'medium' ? 13 :
                                        responsiveMode === 'small' ? 12 :
                                        16
                                    )
                                }}
                            >
                                {lightboxItem.description}
                            </p>
                        </div>
                    )}
                    <div
                        onClick={() => toggleImage('next')}
                        style={{
                            margin: responsiveMode === 'medium' || responsiveMode === 'small' ? '0 10px 20px 0' : '0 10px 0 0',
                            cursor: 'pointer',
                            alignSelf: 'center'
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </div>
                    <div
                        style={{
                            position: 'fixed',
                            top: 15,
                            right: 15,
                            cursor: 'pointer'
                        }}
                        onClick={closeLightbox}
                    >
                        <FontAwesomeIcon icon={faTimes} size='lg' />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    artPage: state.artPage,
    responsivePage: state.responsivePage
});

const mapDispatchToProps = {
    closeLightbox,
    toggleImage,
    setResponsiveMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);