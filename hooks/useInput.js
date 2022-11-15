import { useState } from "react";

export const useInput = (initial, required) => {
    const [value, setValue] = useState(initial);
    const [error, setError] = useState(null);

    return {
        value,
        onBlur: e => {
        if (!e.target.value && required) setError("Required field");
        else setError(null);
        },
        onChange: e => setValue(e.target.value),
        error
    };
};
