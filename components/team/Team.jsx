import React from 'react';
import { connect } from 'react-redux';
import Staff from '../../src/Staff';
import Words from '../../src/Words';

const Team = ({ teamPage: { staff } }) => {
    return (
        <React.Fragment>
            {staff.map(member => (
                <Staff
                    animate
                    header={member.name}
                    headerSize='h2'
                    staff={member.photo}
                    key={member.id}
                    style={{
                        marginBottom: 20
                    }}
                >
                    {anim => (
                        <p>
                            <Words 
                                animate 
                                show={anim.entered} 
                                style={{ 
                                    textTransform: 'uppercase' 
                                }}
                            >
                                {member.position}
                            </Words>
                        </p>
                    )}
                </Staff>
            ))}
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    teamPage: state.teamPage
});

export default connect(mapStateToProps, null)(Team);