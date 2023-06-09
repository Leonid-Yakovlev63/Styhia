import React from 'react';
import s from './DialogList.module.css';
import DialogListItem from './DialogListItem/DialogListItem';

const DialogList = ({ dialogs }) => (
    <ul className={s.dialogList}>
      {dialogs.map((dialog) => (
        <DialogListItem
          key={dialog.id}
          data={dialog}
        />
      ))}
    </ul>
  );

  
export default DialogList;