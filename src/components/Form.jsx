import { useState } from "react";

function Form({ children, onSubmit }) {
return (
<form onSubmit={onSubmit}>
{children}
</form>
);
}

function Input(props) {
return <input {...props} />;
}

function Button({ children }) {
return <button type="submit">{children}</button>;
}

Form.Input = Input;
Form.Button = Button;

export default Form;