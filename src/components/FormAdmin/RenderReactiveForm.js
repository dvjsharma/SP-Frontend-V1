// import { useState } from 'react';
// import { createFillableModel, createSubmitableModel, updateArrOfObjState, hasError } from "../../utils/index";
// import MultiOptionField from "./MultiOptionField";
// import FileField from "./FileField";

// export const submitForm = (submission, formId) => alert("submitted");

// function RenderReactiveForm({ model, onSubmitted }) {
//     console.log("model in render reactive form", model);
//     const [fillableModel, setFillableModel] = useState(createFillableModel(model));
//     const [loading, setLoading] = useState(false);
//     const [err, setErr] = useState("");

//     const handleSubmit = async () => {
//         setErr("");
//         if (loading) return;

//         let error = hasError(fillableModel);
//         if (error) return setErr(error);

//         setLoading(true);

//         let submitableModel = createSubmitableModel(fillableModel);

//         try {
//             await submitForm(submitableModel, model.id);
//             setLoading(false);
//             onSubmitted();
//         } catch (e) {
//             setErr(e.message);
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="main-form mt-1">
//             {fillableModel.map((field, index) => ["short-text", "number"].indexOf(field.type) > -1 ? (
//                 <div key={index} className="input">
//                     <label>{field.title}{field.required && <span className="err">*</span>}</label>
//                     <input type={field.type === "number" ? "number" : "text"} onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.value)} />
//                 </div>
//             ) : field.type === "long-text" ? (
//                 <div key={index} className="input">
//                     <label>{field.title}{field.required && <span className="err">*</span>}</label>
//                     <textarea onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.value)}></textarea>
//                 </div>
//             ) : field.type === "multioption-singleanswer" || field.type === "multioption-multianswer" ? (
//                 <MultiOptionField key={index} fieldModel={field} onSelected={res => updateArrOfObjState(setFillableModel, fillableModel, index, "value", res)} />
//             ) : field.type === "file" ? (
//                 <FileField key={index} fieldModel={field} onCompleted={fileName => updateArrOfObjState(setFillableModel, fillableModel, index, "value", fileName)} />
//             ) : <p key={index}>Unknown field type</p>)}
//             {err && <p className="err mb-1">{err}</p>}
//             <button className="btn" onClick={handleSubmit}>{loading ? <span className="spinner white"></span> : <span>submit</span>}</button>
//         </div>
//     );
// }

// export default RenderReactiveForm;

import { useState } from 'react';
import { createFillableModel, createSubmitableModel, updateArrOfObjState, hasError } from "../../utils/index";
import MultiOptionField from "./MultiOptionField";
import FileField from "./FileField";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Checkbox, FormGroup } from '@mui/material';

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const submitForm = (submission, formId) => alert("submitted");

function RenderReactiveForm({ model, onSubmitted }) {
    console.log("model in render reactive form", model);
    const [fillableModel, setFillableModel] = useState(createFillableModel(model));
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState("");

    const handleSubmit = async () => {
        setErr("");
        if (loading) return;

        // let error = hasError(fillableModel);
        // if (error) return setErr(error);

        setLoading(true);
        
        let submitableModel = createSubmitableModel(fillableModel);
        console.log(submitableModel  ,"in render reactive form")
        alert(submitableModel)
        try {
            await submitForm(submitableModel, model.id);
            setLoading(false);
            onSubmitted();
        } catch (e) {
            setErr(e.message);
            setLoading(false);
        }
    };

    return (
        <div className="grey-container mb-1">
            <h2 style={{color:'black', fontWeight: 300 }}>{model.title}</h2>
            {fillableModel.map((field, index) => ["short-text", "number"].indexOf(field.type) > -1 ? (
                <div
                    key={index}
                    style={{
                        border: "1px solid grey",
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        padding: "2.5em 2em 2.5em 2em",
                        background: "white",
                        borderRadius: "7px",
                        margin: "1em 0em 1em 0em",
                    }}
                >
                    <label style={{ fontWeight: "400", color: "black" }}>
                        {field.title}
                        {field.required && <span className="err"> * </span>}
                    </label>
                    <TextField
                        style={{ marginTop: ".5em " }}
                        type={field.type === "number" ? "number" : "text"}
                        onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.value)}
                        variant="standard"
                    />
                </div>
            ) : field.type === "long-text" ? (
                <div
                    key={index}
                    style={{
                        border: "1px solid grey",
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        padding: "2.5em 2em 2.5em 2em",
                        background: "white",
                        borderRadius: "7px",
                        margin: "1em 0em 1em 0em",
                    }}
                >
                    <label style={{ fontWeight: "400", color: "black" }}>
                        {field.title}
                        {field.required && <span className="err">*</span>}
                    </label>
                    <TextField
                        style={{ marginTop: ".5em " }}
                        onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.value)}
                        variant="standard"
                        multiline
                        placeholder="long answer here"
                    />
                </div>
            ) : field.type === "multioption-singleanswer" || field.type === "multioption-multianswer" ? (
                <div
                    key={index}
                    style={{
                        border: "1px solid grey",
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        padding: "2em 2em 2em 2em",
                        background: "white",
                        borderRadius: "7px",
                        margin: "1em 0em 1em 0em",
                    }}
                >
                    <label
                        style={{ fontWeight: "400", color: "black", marginBottom: "1em" }}
                    >
                        {field.title}
                        {field.required && <span className="err">*</span>}
                    </label>
                    {field.type === "multioption-singleanswer" ? (
                        <FormControl component="fieldset">
                            <RadioGroup
                                name={field.title.replace(" ", "")}
                                onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.value)}
                            >
                                {field.options.map((option, idx) => (
                                    <FormControlLabel
                                        key={idx}
                                        value={option}
                                        control={<Radio />}
                                        label={option}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    ) : (
                        <FormControl component="fieldset">
                            <FormGroup
                                onChange={e => {
                                    const valueArray = fillableModel[index].value || [];
                                    const newValue = e.target.checked
                                        ? [...valueArray, e.target.value]
                                        : valueArray.filter(val => val !== e.target.value);
                                    updateArrOfObjState(setFillableModel, fillableModel, index, "value", newValue);
                                }}
                            >
                                {field.options.map((option, idx) => (
                                    <FormControlLabel
                                        key={idx}
                                        control={<Checkbox value={option} />}
                                        label={option}
                                    />
                                ))}
                            </FormGroup>
                        </FormControl>
                    )}
                </div>
            ) : field.type === "file" ? (
                <div
                    key={index}
                    style={{
                        border: "1px solid grey",
                        display: "flex",
                        flexDirection: "column",
                        width: "50%",
                        padding: "2.5em 2em 2.5em 2em",
                        background: "white",
                        borderRadius: "7px",
                        margin: "1em 0em 1em 0em",
                    }}
                >
                    <label
                        style={{ fontWeight: "400", color: "black", marginBottom: "1em" }}
                    >
                        {field.title}
                        {field.required && <span className="err">*</span>}
                    </label>
                    <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput 
                            type="file" 
                            onChange={e => updateArrOfObjState(setFillableModel, fillableModel, index, "value", e.target.files[0].name)} 
                        />
                    </Button>
                </div>
            ) : <p key={index}>Unknown field type</p>)}
            {err && <p className="err mb-1">{err}</p>}
            <Button variant="contained" onClick={handleSubmit}>
                {loading ? <span className="spinner white"></span> : <span>submit</span>}
            </Button>
        </div>
       );
}

export default RenderReactiveForm;
