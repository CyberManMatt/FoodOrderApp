import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const portal = document.getElementById("overlays")

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
}

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
            {ReactDOM.createPortal(<Backdrop />, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )
}