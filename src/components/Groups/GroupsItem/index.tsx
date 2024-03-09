import { RichCell, UsersStack, Avatar, ButtonGroup, Button } from '@vkontakte/vkui';

import userAvatar from '../../../images/user.jpeg';
import { User } from '../../../types/groups';
import { CounterType, formatCounterText } from '../../../utils/text';

interface IGroupsItemProps {
    className?: string;
    title: string;
    avatarColor: string;
    counter: number;
    friends?: User[];
}

export const GroupsItem: React.FC<IGroupsItemProps> = (props) => {
    const { className, avatarColor,  title, counter, friends = []} = props; 
    return (
        <RichCell 
            className={className}
            before={<Avatar size={72} src={userAvatar} />}
            text={formatCounterText(counter, CounterType.SUBSCRIBERS)}
            bottom={
                <>
                    <UsersStack photos={[userAvatar, userAvatar, userAvatar]}>
                        {formatCounterText(friends.length, CounterType.FRIENDS)}
                    </UsersStack>
                    <Button mode="link">Показать друзей</Button>
                </>
            }
        >
            {title}
        </RichCell>
    )
}