import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return <>
    <div className={css.container}>
    <div>
     <img className={css.profilePhoto}
    src={image}
 alt={name}
 />
<p className={css.userName}>{name}</p>
 <p className={css.user}>@{tag}</p>
 <p className={css.user}>{location}</p>
</div>

<ul className={css.profileStatsList}>
<li className={css.profileStatsItem}>
<span>Followers</span>
 <span className={css.profileStatsCount}>{stats.followers}</span>
</li>
<li className={css.profileStatsItem}>
<span>Views</span>
<span className={css.profileStatsCount}>{stats.views}</span>
</li>
<li className={css.profileStatsItem}>
<span>Likes</span>
<span className={css.profileStatsCount}>{stats.likes}</span>
</li>
</ul>
</div>

</>

}