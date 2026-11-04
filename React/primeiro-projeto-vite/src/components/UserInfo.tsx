import { UserAge } from "./UserAge"
import { UserAvatar } from "./UserAvatar"
import { UserEmail } from "./UserEmail"
import { UserName } from "./UserName"
import { UserRoles } from "./UserRoles"

type Props = {
    name: string;
    email: string;
    age: number;
    avatar?: string;
    roles: {id: number, title: string}[];
}

export const UserInfo = ({name, email, age, roles, avatar = "https://avatars.githubusercontent.com/u"}: Props) => {
    return (
        <>
            <UserAvatar src={avatar} />

            <UserName name={name} />
            
            <UserEmail email={email} />
            
            <UserAge age={age} />
            
            <UserRoles roles={roles} />   
        </>
    ) 
}