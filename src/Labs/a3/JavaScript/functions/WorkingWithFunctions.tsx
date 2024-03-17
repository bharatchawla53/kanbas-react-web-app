import ArrowFunction from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";

function WorkingWithFunctions() {
    console.log('Hello World!');

    return (
        <div>
            <ES5Functions />
            <ArrowFunction />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
        </div>
    );
}

export default WorkingWithFunctions