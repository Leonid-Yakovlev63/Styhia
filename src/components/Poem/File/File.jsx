import React from 'react'
import s from './File.module.css'
import { IconDownload } from '@tabler/icons-react'

/**
 * 
 * @param {{data:{id:number,name:string,type:"IMAGE"|"ANY"}}} param0 
 * @returns 
 */
export default function File({data}) {
    return (
        <div className={s.file}>
            <div className={s.text}>{data.name}</div>
            <a href={`/api/files/${data.id}`} download={data.name}>
                <IconDownload className={s.download} />
            </a>
        </div>
    )
}
