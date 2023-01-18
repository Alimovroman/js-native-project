import {FC, MouseEvent} from "react";

const User: FC = () => {
    const onDeleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
        alert (e.currentTarget.name)
    }
    const onChangeText = () => {
        console.log('change')
    }
    const onBlurFocusLost = () => {
        console.log('go out')
    }

    return (
        <div>
            <textarea onBlur={onBlurFocusLost} tabIndex={1} onChange={onChangeText}/>
            Roman
            <button name='delete' tabIndex={3} onClick={onDeleteHandler}>x</button>
            <button name='save' tabIndex={2} onClick={onDeleteHandler}>x</button>
        </div>
    )
}

export default User;