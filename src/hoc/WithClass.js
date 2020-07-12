import React from 'react'

const withClass = (WrappedComponet, className) => {
    return (props) => (
        <div className={props.classes}>
            <WrappedComponet/>
        </div>
    );
};

export default withClass;