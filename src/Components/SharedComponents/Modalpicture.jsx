import React, { useEffect, useRef } from 'react';
import './modalpicture.scss';

const Modalpicture = props => {
    const modalRef = useRef();

    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };
        window.addEventListener('click', clickOutsideContent);
        return () => {
            window.removeEventListener('click', clickOutsideContent);
        };
    }, [props]);

    return <div ref={modalRef} className={`pmodal ${props.show ? 'active' : ''}`}>
        <div className="pmodal__pic">
            {
                !props.hideCloseButton && <span onClick={() => props.setShow(false)} className="pmodal__close">
                    &times;
                </span>
            }
            {props.children}
        </div>
    </div>;
};

export default Modalpicture;

export const ModalHeader = props => {
    return <div className="pmodal__header">
        {props.children}
    </div>
}

export const ModalBody = props => {
    return <div className="pmodal__body">
        {props.children}
    </div>
}

export const ModalFooter = props => {
    return <div className="pmodal__footer">
        {props.children}
    </div>
}