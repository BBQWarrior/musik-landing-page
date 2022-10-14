type ButtonVariantType = 'standard' | 'rounded';
type TextBoldType = 'semibold' | 'bold';
type PaddingType = 'big' | 'small'

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: ButtonVariantType;
    textFont?: TextBoldType
    bordered?: boolean;
    custom?: string;
    padding?: PaddingType;
}

const Button: React.FC<Props> = ({
    onClick,
    children,
    variant = 'standard',
    textFont,
    bordered,
    custom,
    padding = 'small'
}) => {
    const variantClass = variant === 'rounded' ? 'rounded' : '';
    const textFontClass = textFont === 'bold' ? 'font-bold' : 'font-semibold';
    const paddingClass = padding === 'big' ? 'py-3 px-7' : 'py-3 p-4';
    return (
        <button 
        type="button" 
        className={`${variantClass} flex text-base ${textFontClass} ${paddingClass} ${bordered} ${custom}`}
        onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;