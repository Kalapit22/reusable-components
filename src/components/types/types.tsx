export interface InputProps {
    type: string; 
    name?: string;
    register?: any;
    placeholder?: string;
    required: boolean;
    disabled?: boolean;
    defaultValue?: string;
    options?: any;
    className?: string;
    onChange?: () => void;
    onBlur?: () => void;
    withLabel?: boolean;
    labelTxt?: string;
    ref?: any;
}


