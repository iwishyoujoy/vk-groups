import { ReactNode } from "react";
import cn from 'classnames';

import styles from './styles.module.css';

interface IWrapperProps{
    children: ReactNode;
    className?: string;
}

export const Wrapper: React.FC<IWrapperProps> = ({children, className}) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            {children}
        </div>
    )
}