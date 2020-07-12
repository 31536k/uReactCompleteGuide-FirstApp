import React from 'react'

const withClass = (WrappedComponet, className) => {
    return (props) => (
        <div className={props.classes}>
            <WrappedComponet {...props}/>
        </div>
    );
};

export default withClass;