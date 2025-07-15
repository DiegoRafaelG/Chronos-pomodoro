import Styles from './Heading.module.css';

type HeadingProps ={
    children: React.ReactNode;
};

export function Heading({ children}: HeadingProps){
    return <h1 className={ Styles.heading}>{children}</h1>;

}
