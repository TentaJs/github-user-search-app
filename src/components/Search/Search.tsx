import {ReactComponent as SearchIcon} from "assets/icon-search.svg";
import styles from './Search.module.scss';
import {useRef} from "react";
import {Button} from "../Button";

interface SearchProps {
    hasError: boolean,
    onSumbit: (text : string) => void
}

export const Search = ({hasError, onSumbit}: SearchProps) => {
    const searchRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const text = searchRef.current ? searchRef.current.value : ""
        if (text.trim()) {
            onSumbit(text)
            if (searchRef.current){
                searchRef.current.value = ""
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} autoComplete={'off'}>
            <div className={styles.search}>
                <label htmlFor="{'search'}" className={styles.label}>
                    <SearchIcon/>
                </label>
                <input type={'text'} className={styles.textField} id={'search'} name={'username'} placeholder={'Search GitHub username...'} ref={searchRef}/>
                {hasError && (
                    <div className={styles.error}>No result</div>
                )}
                <Button>Search</Button>
            </div>
        </form>
    )
};
