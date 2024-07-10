import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderReactiveForm from '../../components/FormAdmin/RenderReactiveForm';
import { expired } from '../../utils/index';

function Fill() {
    const { id } = useParams();

    const [form, setForm] = useState(null);
    const [msg, setMsg] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setForm({
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
        });
        setLoading(false);
    }, []);

    console.log(form, "FORM IN FILL JS");

    return (
        <div>
            {/* <h3>{form ? form.title : "Fill in the form"}</h3> */}
            {
                loading ? <p className="text-center mt-1"><span className="spinner"></span></p>
                    : msg ? <h3 className="msg mt-1">{msg}</h3>
                        : submitted ? <h3 className="msg mt-1">{form ? (form.endMessage || "Thank you for submitting the form") : "Unknown state"}</h3>
                            : form ? expired() ? <h3 className="msg mt-1">This form has been expired</h3>
                                : <RenderReactiveForm model={form} onSubmitted={() => setSubmitted(true)} />
                                : <h3 className="msg mt-1">Form not found</h3>
            }
        </div>
    );
}

export default Fill;
