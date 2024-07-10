import { useState } from 'react'

import { TextField, Switch, IconButton  } from '@mui/material';
import { Button } from "@mui/material";
function AddTextField({inputType, add, close}){
    const [err, setErr ] = useState("")

    const [title, setTitle] = useState("")
    const [required, setRequired] = useState(false)

    const addField = () => {
        if(!title.trim()) return setErr("Title is required")
        if(title.trim().length < 3) return setErr("Title should be atleast 3 characters long")

        add({
            title,
            required,
            type: inputType
        })
        close()
    }

    return (
        <div>
            <div style={{display:'flex' , flexDirection:'column'  , fontWeight:'400' , fontSize:'20px' ,  marginBottom:'1em'}}>
                <label style={{marginBottom:'0.3em'}}>Enter field title</label>
                {/* <input type="text" placeholder={`Eg. Enter your ${inputType === "short-text" ? "Username" : inputType === "long-text" ? "information" : "age"}`} onChange={e => setTitle(e.target.value)} /> */}
                <TextField
                    variant="standard" 
                    placeholder={`Eg. Enter your ${inputType === "short-text" ? "Username" : inputType === "long-text" ? "information" : "age"}`}
                  onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div style={{display:'flex' , flexDirection:'row'  , fontWeight:'400' , fontSize:'20px' ,  marginBottom:'1em'}}>
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
              size="small"
             onClick={addField}>add field</Button>
        </div>
    )
}

export default AddTextField


// import { useState } from 'react';
// import { TextField, Switch, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

// function AddTextField({ inputType, add, close }) {
//     const [err, setErr] = useState("");
//     const [title, setTitle] = useState("");
//     const [required, setRequired] = useState(false);

//     const addField = () => {
//         if (!title.trim()) return setErr("Title is required");
//         if (title.trim().length < 3) return setErr("Title should be at least 3 characters long");

//         add({
//             title,
//             required,
//             type: inputType
//         });
//         close();
//     };

//     return (
//         <div>
//             <div className="input">
//                 <label>Enter field title</label>
//                 {/* Original input replaced with MUI TextField */}
//                 <TextField
//                     variant="filled"
//                     placeholder={`Eg. Enter your ${inputType === "short-text" ? "Username" : inputType === "long-text" ? "information" : "age"}`}
//                     onChange={e => setTitle(e.target.value)}
//                 />
//             </div>
//             <div className="input inline">
//                 <label>Required: </label>
//                 {/* Original checkbox replaced with MUI Switch */}
//                 <Switch
//                     checked={required}
//                     onChange={() => setRequired(!required)}
//                 />
//             </div>
//             {err && <p className="err mb-1">{err}</p>}
//             <button className="btn" onClick={addField}>add field</button>
//             {/* Comment out previous IconButton if any */}
//             {/* <button className="btn delete-btn" onClick={deleteField}>x</button> */}
//             {/* New MUI IconButton */}
        //    <IconButton aria-label="delete" onClick={close}>
        //        <DeleteIcon />
        //    </IconButton>
//         </div>
//     );
// }

// export default AddTextField;
