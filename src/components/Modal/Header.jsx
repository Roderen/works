const Header = (props) => <>
  <div className="modal-title">{props.children}</div>
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggle}></button>
</>

export default Header;