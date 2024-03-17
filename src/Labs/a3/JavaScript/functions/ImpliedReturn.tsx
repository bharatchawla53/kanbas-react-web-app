function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
            <h2>Implied return</h2>
            fourTimesFive = {fourTimesFive}<br />
            multiply(4, 5) = {multiply(2, 4)}<br />
        </>
    );
}

export default ImpliedReturn