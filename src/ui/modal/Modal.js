import {useEffect, useMemo} from "react"
import {createPortal} from "react-dom"
import Proptypes from "prop-types"
import "./Modal.scss"
import Button from "../button/Button"
import {ReactComponent as CloseSvg} from "../../assets/close.svg"

const modalRootElement = document.querySelector("#modal-portal")

const Modal = ({children, open, onClose, title}) => {
    const element = useMemo(() => document.createElement("div"), [])

    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element)
            document.body.style.overflow = "hidden"

            return () => {
                modalRootElement.removeChild(element)
                document.body.style.overflow = ""
            }
        }
    }, [open])

    if (open) {
        return createPortal(
            <div className="modal" onClick={onClose}>
                <div className="modal-body" onClick={e => e.stopPropagation()}>
                    <header className="modal-header">
                        <h2>{title}</h2>
                        <CloseSvg className="close" onClick={onClose}/>
                    </header>
                    <main className="modal-content">
                        {children}
                    </main>
                    <footer className="modal-footer">
                        <Button onClick={onClose} color="success">
                            Submit
                        </Button>
                        <Button onClick={onClose} color="error">
                            Close
                        </Button>
                    </footer>
                </div>
            </div>,
            modalRootElement)
    }

    return null
}

export default Modal

Modal.propTypes = {
    open: Proptypes.bool.isRequired,
    onClose: Proptypes.func.isRequired,
    children: Proptypes.node.isRequired,
    title: Proptypes.string
}
