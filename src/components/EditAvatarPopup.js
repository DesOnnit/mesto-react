import PopupWithForm from "./PopupWithForm";
function EditAvatarPopup (props) {
    return (
        <PopupWithForm
        name = "avatar"
        title = "Обновить аватар"
        button = "Сохранить"
        isOpen = {props.isOpen}
        onClose = {props.onClose}
        >
            <label className="popup__label">
               <input type="url" className="popup__input" id="avatar" name="avatar" placeholder="Ссылка на аватар" required />
                <span className="popup__error" id="avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup