type Props = {
    src: string
}

export const UserAvatar = ({src}: Props) => {
    return (
        <img 
            src={src} 
            alt="User Avatar" 
            onClick={() => alert('Click')}
        />
    );
}