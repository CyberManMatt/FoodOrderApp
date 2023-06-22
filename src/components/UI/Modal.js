/*
Component Type: Presentation
Description: Reuseable modal component with a backdrop that is rendered in the overlays portal in index.html
*/

import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

// Initialize portal element
const portal = document.getElementById("overlays")

// Initialize Backdrop component to be used in the Modal component
const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}

// Initialize Modal Overlay component to be used in the Modal component
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

export function Modal(props) {
    return (
        <>
            {/* Create portals for the Backdrop and Modal Overlay in the "overlays" id in index.html */}
            {ReactDOM.createPortal(<Backdrop />, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )
}