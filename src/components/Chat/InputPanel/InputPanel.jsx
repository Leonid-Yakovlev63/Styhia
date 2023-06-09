import { IconSend } from '@tabler/icons-react';
import React from 'react';
import s from './InputPanel.module.css'

export default function InputPanel({setV, send}) {
  return (
    <div className={s.inputPanel}>
        <input className={s.inputField} onInput={setV} />
        <button className={s.sendButton} onClick={send}>
            <IconSend />
        </button>
    </div>
  )
}
