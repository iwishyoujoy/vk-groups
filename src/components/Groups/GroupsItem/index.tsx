import { RichCell, UsersStack, Avatar, Link, Popover } from '@vkontakte/vkui';
import { Icon36Users } from '@vkontakte/icons';

import userAvatar from '../../../images/user.jpeg';
import { User } from '../../../types/groups';
import { CounterType, formatCounterText } from '../../../utils/text';
import styles from './styles.module.css';

interface IGroupsItemProps {
    className?: string;
    title: string;
    avatarColor?: string;
    counter: number;
    closed: boolean;
    friends?: User[];
}

type AvatarColorMap = {
    [key: string]: 1 | 2 | 3 | 4 | 5 | 6 | "custom";
}

const avatarColorMap: AvatarColorMap = {
    "red": 1,
    "orange": 2,
    "yellow": 3,
    "green": 4,
    "blue": 5,
    "purple": 6,
    "white": "custom"
}

export const GroupsItem: React.FC<IGroupsItemProps> = (props) => {
    const { className, avatarColor,  title, closed, counter, friends = []} = props;
    
    const friendsAvatars = friends.map(() => userAvatar);
    const gradientColor = avatarColor ? avatarColorMap[avatarColor] : undefined;

    return (
        <>
            <RichCell 
                className={className}
                before={gradientColor ? 
                    <Avatar 
                        size={100} 
                        gradientColor={gradientColor} 
                        className={avatarColor === "white" ? styles.whiteAvatar : undefined}
                    /> 
                    : 
                    <div className={styles.noAvatar}>
                        <Icon36Users fill="#9bb2cc" height={60} width={60}/>
                    </div>}
                text={closed ? "Закрытое сообщество" : "Открытое сообщество"}
                bottom={
                    <>
                    <UsersStack photos={friendsAvatars}>
                        {friends.length > 0 ? 
                            <>
                                <Popover
                                    trigger={["click", "hover"]}
                                    placement="bottom-start"
                                    role="tooltip"
                                    content={
                                        <div className={styles.friendsContainer}>
                                            {friends.map((friend) => {
                                                return (<div className={styles.friend}>
                                                    <Avatar className={styles.photo} src={userAvatar}/>
                                                    <span className={styles.name}>{friend.first_name} <br /> {friend.last_name}</span>
                                                </div>)
                                            })}
                                        </div>
                                    }
                                >
                                    <Link className={styles.link}>{formatCounterText(friends.length, CounterType.FRIENDS)}</Link> 
                                </Popover>
                                <span> · </span>
                            </>
                        : ""}
                        <span className={friends.length > 0 ? "" : styles.subscribers}>{formatCounterText(counter, CounterType.SUBSCRIBERS)}</span>
                    </UsersStack>
                    </>
                }
            >
                {title}
            </RichCell>
        </>
        
    )
}