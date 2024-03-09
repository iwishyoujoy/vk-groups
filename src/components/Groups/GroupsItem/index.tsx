import { RichCell, UsersStack, Avatar, Button } from '@vkontakte/vkui';

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

export const GroupsItem: React.FC<IGroupsItemProps> = (props) => {
    const { className, avatarColor,  title, closed, counter, friends = []} = props; 

    const friendsAvatars = friends.map(() => userAvatar);

    return (
        <RichCell 
            className={className}
            before={<Avatar size={72} src={userAvatar} />}
            text={closed ? "Закрытое сообщество" : "Открытое сообщество"}
            bottom={
                <>
                    <UsersStack photos={friendsAvatars}>
                        {friends.length > 0 ? formatCounterText(friends.length, CounterType.FRIENDS) + " · " : ""}
                        <span className={friends.length > 0 ? "" : styles.subscribers}>{formatCounterText(counter, CounterType.SUBSCRIBERS)}</span>
                    </UsersStack>
                    {friends.length > 0 ? (
                        <Button mode="link">Показать друзей</Button>
                    ) : ""}
                </>
            }
        >
            {title}
        </RichCell>
    )
}