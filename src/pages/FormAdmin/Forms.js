import { useState, useEffect } from 'react'

// import { getForms } from "../db"
import FormCard from "../../components/FormAdmin/FormCard"

function Forms(){
    const [forms, setForms] = useState([])
    const [msg, setMsg] = useState('')
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     if(!localStorage.getItem('gfc-user')) return
    //     const fetchData = async () => {
    //         try{
    //             let frms = await getForms()
                
    //             setForms(frms)
    //             setLoading(false)
    //         }catch(e){
    //             setLoading(false)
    //             setMsg(e.message)
    //         }
    //     }
    //     fetchData()
    // }, [])

    useEffect(() => {
        setForms([{
            "title": "trial FORM",
            "createdAt": 1720218086247,
            "fields": [
                {
                    "title": "Enter your email",
                    "type": "short-text",
                    "required": true
                },
                {
                    "title": "this is short text req",
                    "required": true,
                    "type": "short-text"
                },
                {
                    "title": "this is long text",
                    "required": false,
                    "type": "long-text"
                },
                {
                    "title": "what is your age ",
                    "required": false,
                    "type": "number"
                },
                {
                    "title": "choose one of the following ",
                    "required": false,
                    "options": [
                        "arnav",
                        "kriti",
                        "yash",
                        "aarav"
                    ],
                    "type": "multioption-singleanswer"
                },
                {
                    "title": "this is multioption multianswer",
                    "required": false,
                    "options": [
                        "apple",
                        "ball",
                        "cat",
                        "dog"
                    ],
                    "type": "multioption-multianswer"
                },
                {
                    "title": "what is age ?",
                    "required": true,
                    "type": "number"
                },
                {
                    "title": "upload resume ",
                    "required": true,
                    "type": "file",
                    "accepted": [
                        "png",
                        "pdf",
                        "jpeg",
                        "jpg",
                        "txt"
                    ]
                }
            ],
            "endMessage": "thanks for filling",
            "expiration": "109"
        },{
            "title": "trial FORM",
            "createdAt": 1720218086247,
            "fields": [
                {
                    "title": "Enter your email",
                    "type": "short-text",
                    "required": true
                },
                {
                    "title": "this is short text req",
                    "required": true,
                    "type": "short-text"
                },
                {
                    "title": "this is long text",
                    "required": false,
                    "type": "long-text"
                },
                {
                    "title": "what is your age ",
                    "required": false,
                    "type": "number"
                },
                {
                    "title": "choose one of the following ",
                    "required": false,
                    "options": [
                        "arnav",
                        "kriti",
                        "yash",
                        "aarav"
                    ],
                    "type": "multioption-singleanswer"
                },
                {
                    "title": "this is multioption multianswer",
                    "required": false,
                    "options": [
                        "apple",
                        "ball",
                        "cat",
                        "dog"
                    ],
                    "type": "multioption-multianswer"
                },
                {
                    "title": "what is age ?",
                    "required": true,
                    "type": "number"
                },
                {
                    "title": "upload resume ",
                    "required": true,
                    "type": "file",
                    "accepted": [
                        "png",
                        "pdf",
                        "jpeg",
                        "jpg",
                        "txt"
                    ]
                }
            ],
            "endMessage": "thanks for filling",
            "expiration": "109"
        },{
            "title": "trial FORM",
            "createdAt": 1720218086247,
            "fields": [
                {
                    "title": "Enter your email",
                    "type": "short-text",
                    "required": true
                },
                {
                    "title": "this is short text req",
                    "required": true,
                    "type": "short-text"
                },
                {
                    "title": "this is long text",
                    "required": false,
                    "type": "long-text"
                },
                {
                    "title": "what is your age ",
                    "required": false,
                    "type": "number"
                },
                {
                    "title": "choose one of the following ",
                    "required": false,
                    "options": [
                        "arnav",
                        "kriti",
                        "yash",
                        "aarav"
                    ],
                    "type": "multioption-singleanswer"
                },
                {
                    "title": "this is multioption multianswer",
                    "required": false,
                    "options": [
                        "apple",
                        "ball",
                        "cat",
                        "dog"
                    ],
                    "type": "multioption-multianswer"
                },
                {
                    "title": "what is age ?",
                    "required": true,
                    "type": "number"
                },
                {
                    "title": "upload resume ",
                    "required": true,
                    "type": "file",
                    "accepted": [
                        "png",
                        "pdf",
                        "jpeg",
                        "jpg",
                        "txt"
                    ]
                }
            ],
            "endMessage": "thanks for filling",
            "expiration": "109"
        },{
            "title": "trial FORM",
            "createdAt": 1720218086247,
            "fields": [
                {
                    "title": "Enter your email",
                    "type": "short-text",
                    "required": true
                },
                {
                    "title": "this is short text req",
                    "required": true,
                    "type": "short-text"
                },
                {
                    "title": "this is long text",
                    "required": false,
                    "type": "long-text"
                },
                {
                    "title": "what is your age ",
                    "required": false,
                    "type": "number"
                },
                {
                    "title": "choose one of the following ",
                    "required": false,
                    "options": [
                        "arnav",
                        "kriti",
                        "yash",
                        "aarav"
                    ],
                    "type": "multioption-singleanswer"
                },
                {
                    "title": "this is multioption multianswer",
                    "required": false,
                    "options": [
                        "apple",
                        "ball",
                        "cat",
                        "dog"
                    ],
                    "type": "multioption-multianswer"
                },
                {
                    "title": "what is age ?",
                    "required": true,
                    "type": "number"
                },
                {
                    "title": "upload resume ",
                    "required": true,
                    "type": "file",
                    "accepted": [
                        "png",
                        "pdf",
                        "jpeg",
                        "jpg",
                        "txt"
                    ]
                }
            ],
            "endMessage": "thanks for filling",
            "expiration": "109"
        }])
       
    }, [])
    const onFormDelete = id => {
        setForms(forms.filter(form => form.id !== id))
    }
  
    return (
        <div>
            <h2 style={{fontWeight:400 , paddingLeft:'1.3em'}}>My Forms</h2>
            {/* {
                loading ? <p className="text-center mt-1"><span className="spinner"></span></p>
                : msg ? <h3 className="msg mt-1">{msg}</h3> 
                : (
                    <div className="cards-container">
                        { forms.length > 0 ? (
                            forms.map(form => (
                                <FormCard key={form.id} form={form} onDelete={onFormDelete} />
                            ))
                        ) : <h3 className="msg mt-1">You haven't created any forms yet</h3> }
                    </div>
                )
            } */}
            <div className="cards-container">
                        { forms.length > 0 ? (
                            forms.map(form => (
                                <FormCard key={form.id} form={form} onDelete={onFormDelete} />
                            ))
                        ) : <h3 className="msg mt-1">You haven't created any forms yet</h3> }
                    </div>
        </div>
    )
}

export default Forms