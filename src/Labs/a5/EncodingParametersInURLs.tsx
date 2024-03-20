import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [welcome, setWelcome] = useState("");
    const [result, setResult] = useState(0);

    const fetchWelcome = async () => {
        const response = await axios.get("http://localhost:4000/a5/welcome");
        setWelcome(response.data);
    };
    const fetchSum = async (a: number, b: number) => {
        const response = await
            axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
        setResult(response.data);
    };
    const fetchSubtraction = async (a: number, b: number) => {
        const response = await
            axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    useEffect(() => {
        fetchWelcome();
    }, []);

    return (
        <div>
            <h3>Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>

            <h4>Calculator</h4>
            <input type="number" value={a}
                onChange={(e) => setA(parseInt(e.target.value, 10))} />
            <br /><br />
            <input type="number"
                onChange={(e) => setB(parseInt(e.target.value, 10))} value={b} />
            <h3>Path Parameters</h3>
            <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
                Substract {a} - {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
                Multiply {a} * {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>
            <br /><br />
            <input value={result} type="number" readOnly />
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)} >
                Fetch Sum of {a} + {b}
            </button>
            <br /><br />
            <button onClick={() => fetchSubtraction(a, b)} >
                Fetch Substraction of {a} - {b}
            </button>

            <h3>Query Parameters</h3>
            <a href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} * {b}
            </a>
            &nbsp;&nbsp;
            <a href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b}
            </a>

        </div>
    );
}

export default EncodingParametersInURLs;