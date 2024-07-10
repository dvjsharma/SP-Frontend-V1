import { useState } from 'react'
import { arrayToggle } from '../../utils/index'
import { TextField, Switch, IconButton  } from '@mui/material';
import { Button } from "@mui/material";
function AddFileField({inputType, add, close}){
    const [err, setErr ] = useState("")

    const availableTypes = ["jpg", "png", "jpeg", "pdf", "txt"]

    const [title, setTitle] = useState("")
    const [required, setRequired] = useState(false)
    const [fileTypes, setFileTypes] = useState([])

    const addFileType = type => {
        let _fileTypes = [...fileTypes]
        arrayToggle(_fileTypes, type)
        setFileTypes(_fileTypes)
    }

    const addField = () => {
        if(!title.trim()) return setErr("Title is required")
        if(title.trim().length < 4) return setErr("Title should be atleast 4 characters long")
        if(!fileTypes.length) return setErr("Select atleast one file type")
        add({
            title,
            required,
            type: inputType,
            accepted: fileTypes
        })
        close()
    }

    return (
        <div>
            <div style={{display:'flex' , flexDirection:'column'  , fontWeight:'300' , fontSize:'20px' ,  marginBottom:'1em'}}>
                <label style={{marginBottom:'0.3em'}}>Enter field title</label>
                <TextField
                    variant="standard" type="text" placeholder="Eg. Upload your resume" onChange={e => setTitle(e.target.value)} />
            </div>
            <div >
                <label>Select acceptable file types</label>
                <div >
                    { availableTypes.map((type, index) => (
                        <div key={index}>
                            <input type="checkbox" className="mr-1" onChange={() => addFileType(type)} />
                            <label>.{type}</label>
                        </div>
                    )) }
                </div>
            </div>
            <div style={{display:'flex' , flexDirection:'row'  , fontWeight:'300' , fontSize:'20px' ,  marginBottom:'1em' , marginTop:'.5em' }}>
                <label>Required: </label>
                {/* <input type="checkbox" onChange={() => setRequired(!required)} /> */}
                <Switch
                     checked={required}
                    onChange={() => setRequired(!required)}
                />
            </div>
            {err && <p className="err mb-1">{err}</p>}
            <Button
             variant="outlined"
             size="small" className="btn" onClick={addField}>add field</Button>
        </div>
    )
}

export default AddFileField