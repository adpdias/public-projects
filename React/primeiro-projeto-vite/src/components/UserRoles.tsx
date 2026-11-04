type Props ={
    roles: {id: number, title: string}[]
}

export const UserRoles = ({roles}: Props) => {
        return (
        <ul>
            {roles.map(value => (
                <li key={value.id}>{value.title}</li>
            ))}
        </ul>
    )
}