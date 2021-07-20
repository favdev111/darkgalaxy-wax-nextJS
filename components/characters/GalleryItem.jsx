import React from 'react';

const GalleryItem = ({
    itemsList,
    viewImage,
    responsiveMode
}) => {
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    flexDirection: responsiveMode === 'medium' || responsiveMode === 'small' ? 'column' : 'row',
                    flexWrap: responsiveMode === 'medium' || responsiveMode === 'small' ? 'nowrap' : 'wrap',
                    alignItems: 'center',
                    justifyContent: responsiveMode === 'medium' || responsiveMode === 'small' ? 'flex-start' : 'space-around'
                }}
            >
                {itemsList.map(item => (
                    <img
                        src={item.src}
                        key={item.id}
                        style={{
                            width: (
                                responsiveMode === 'large' ? 190 :
                                    responsiveMode === 'medium' ? 200 :
                                        responsiveMode === 'small' ? 160 :
                                            150
                            ),
                            height: (
                                responsiveMode === 'large' ? 270 :
                                    responsiveMode === 'medium' ? 290 :
                                        responsiveMode === 'small' ? 230 :
                                            210
                            ),
                            margin: 20,
                            border: '3px solid #029DBB',
                            borderRadius: 5,
                            cursor: 'pointer'
                        }}
                        onClick={() => viewImage(item.id, item.race)}
                    />
                ))}
            </div>
        </React.Fragment>
    );
};

export default GalleryItem;