import styles from './UserCard.module.scss';
import {UserStat, UserStatProps} from "../UserStat";
import {LocalGitHubUser} from "../../types";
import {UserTitle} from "../UserTitle";
import {UserInfo} from "../UserInfo";

interface UserCardProps extends LocalGitHubUser{ }



export const UserCard = (props : UserCardProps) => {

    return (
        <div className={styles.userCard}>
            <img src={props.avatar} alt={props.login} className={styles.avatar}/>
            <UserTitle login={props.login} name={props.name} created={props.created}/>
            <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>{props.bio || 'This profile has no bio'}</p>
            <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
            <UserInfo company={props.company} blog={props.blog} location={props.location} twitter={props.twitter}/>
        </div>
    );
}
