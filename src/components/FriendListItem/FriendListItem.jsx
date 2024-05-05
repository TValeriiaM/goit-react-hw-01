import css from "./FriendListItem.module.css"
import clsx from "clsx"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
        <p className={clsx(
        isOnline === true ? css.offline : css.online
      )}>
            {isOnline
        ? "Online"
        : "Offline"}
  </p>
</div>
}