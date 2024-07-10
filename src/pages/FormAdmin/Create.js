import { useState } from "react";
// import { useHistory } from "react-router-dom"
import AddFieldModal from "../../components/FormAdmin/AddFieldModal";
import RenderPlainForm from "../../components/FormAdmin/RenderPlainForm";

import { updateObjState } from "../../utils/index";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// import { createForm as saveForm } from "../db"

function Create() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [inputType, setInputType] = useState("text");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // const history = useHistory()

  const openAddModal = (inputType) => {
    setShowAddModal(true);
    setInputType(inputType);
  };

  const [formModel, setFormModel] = useState({
    title: "",
    createdAt: +new Date(),
    fields: [
      {
        title: "Enter your email",
        type: "short-text",
        required: true,
      },
    ],
    endMessage: "",
    expiration: "",
  });

  const addFieldToFormModel = (field) => {
    let _model = Object.assign({}, formModel);
    _model.fields.push(field);
    setFormModel(_model);
  };

  const inputTypes = [
    "short-text",
    "long-text",
    "number",
    "multioption-singleanswer",
    "multioption-multianswer",
    "file",
  ];

  const createForm = async () => {
    if (loading) return;
    setErr("");

    if (!formModel.title.trim()) return setErr("Title is required");
    if (formModel.title.trim().length < 5 || formModel.title.trim().length > 50)
      return setErr("Title should be 5 - 50 characters long");

    if (formModel.expiration.trim() && formModel.expiration < 1)
      return setErr("Validity should be at least an hour");

    if (formModel.fields.length < 2)
      return setErr("You need to add at least one field");

    // setLoading(true)
    // try{
    //     await saveForm(formModel)
    //     setLoading(false)
    //     // history.push("/forms")
    // }catch(e){
    //     setErr(e.message)
    //     setLoading(false)
    // }
  };

  return (
    <div
      style={{
        paddingLeft: "0vw",
        paddingRight: "0vw",
        background: "#CEE5FD",
        opacity: "1",
        border: "solid 1px green",
      }}
    >
      <div
        style={{
          position: "fixed",
          paddingBottom: "1em",
          width: "100%",
          background: "#CEE5FD",
          zIndex: "1001",
          paddingLeft: "2vw",
        }}
      >
        <h3>
          {/* <label>Title of the from</label> */}
          <TextField
            type="text"
            placeholder="Enter Title"
            onChange={(e) =>
              updateObjState(setFormModel, formModel, "title", e.target.value)
            }
            id="standard-basic"
            label="EnterTitle"
            variant="standard"
          />
          {/* <input type="text" placeholder="Enter title" onChange={e => updateObjState(setFormModel, formModel ,"title", e.target.value)} /> */}
        </h3>
        <div>
          <span>Type Of que</span>
          {inputTypes.map((inputType, index) => (
            <Button
              class="btn"
              variant="outlined"
              size="small"
              HO
              key={index}
              onClick={() => openAddModal(inputType)}
            >
              {inputType.replace("-", " ")}
            </Button>
          ))}
        </div>
      </div>
      <div style={{ paddingTop: "14vh" }}>
        <div className="form" style={{ paddingLeft:'2vw'}}>
          {formModel.fields.length > 0 && <RenderPlainForm model={formModel} />}

          <div
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
              End message
            </label>
            {/* <input type="text" placeholder="What should user see after submitting the form" onChange={e => updateObjState(setFormModel, formModel ,"endMessage", e.target.value)} /> */}
            <TextField
              style={{ marginTop: ".5em " }}
              type="text"
              id="standard-basic"
              //   label="answer here"
              variant="standard"
              placeholder="What should user see after submitting the form"
              onChange={(e) =>
                updateObjState(
                  setFormModel,
                  formModel,
                  "endMessage",
                  e.target.value
                )
              }
            />
          </div>

          <div
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
              Validity(Optonal)
            </label>
            <TextField
              style={{ marginTop: ".5em " }}
              //  type="text"
              id="standard-basic"
              //   label="answer here"
              variant="standard"
              type="number"
              placeholder="For how many hours the form should be fillable"
              onKeyDown={(e) => {
                if (e.key === "." || e.key === "-") {
                  e.preventDefault();
                }
              }}
              onChange={(e) =>
                updateObjState(
                  setFormModel,
                  formModel,
                  "expiration",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <p className="mb-2 text-right">
          {err && <p className="err text-right mb-1">{err}</p>}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "1000",
            }}
          >
            <Button
              variant="contained"
              onClick={(createForm, console.log(formModel))}
            >
              {loading ? (
                <span className="spinner white"></span>
              ) : (
                <span>Publish Form</span>
              )}
            </Button>
          </div>
        </p>

        {showAddModal && (
          <AddFieldModal
            inputType={inputType}
            close={() => setShowAddModal(false)}
            add={addFieldToFormModel}
          />
        )}
      </div>
    </div>
  );
}

export default Create;
