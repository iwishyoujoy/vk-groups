import { ReactNode } from "react";

import styles from './styles.module.css';

interface IWrapperProps{
    children: ReactNode;
}

export const Wrapper: React.FC<IWrapperProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}