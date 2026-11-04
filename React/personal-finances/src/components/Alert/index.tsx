import { useEffect, type ReactNode } from 'react';
import { MdDoneAll, MdInfoOutline } from 'react-icons/md';
import { Container, Title, Content } from './styles';

type Props = {
    type: string,
    show: boolean,
    setShow: (show: boolean) => void,
    autoHideDuration?: number,
    title?: string,
    children?: ReactNode
}

const Alert = ({ type, show, setShow, title, children, autoHideDuration = 3000 }: Props) => {
    useEffect(() => {
        if (show && autoHideDuration) {
            setTimeout(() => { setShow(false) }, autoHideDuration);
        }
    }, [show]);

    return (
        <Container $show={show} $type={type}>
            {type == 'error' && <MdInfoOutline className="icon" />}
            {type == 'success' && <MdDoneAll className="icon" />}

            <Content>   
                {title && <Title>{title}</Title>}
                {children}
            </Content>
        </Container>
    )
}

export default Alert;