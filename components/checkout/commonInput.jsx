import React, { useState, useEffect } from "react";
import withStyles from "../../src/tools/withStyles";


const styles = () => {
    return {
        input: {
            background: 'transparent',
            width: '100%',
            height: 30,
            border: '1px solid #26dafd',
            color: '#26dafd',
            fontSize: 18
        },
    }
}

const CommonInput = ({label, name, classes, placeholder, required }) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input 
                    type="text" 
                    className={classes.input}
                    required={required}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(CommonInput);